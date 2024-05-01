const mysql = require('mysql');
const nodemailer = require('nodemailer');
const currentDate = new Date();

// Get the day, month, and year
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });
const year = currentDate.getFullYear();

// Function to get the suffix for the day
function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

// Form the desired date string
const formattedDate = `${day}${getDaySuffix(day)} ${month} ${year}`;

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college'
};

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'crceacademictracker@gmail.com',
    pass: 'oabk wetn nfwi wwcs'
  }
});

// Query to fetch students with attendance less than 75%
const query = `
  SELECT *
  FROM attendance
  WHERE attendance < 51
`;

// Execute the query
pool.query(query, (error, results) => {
  if (error) {
    console.error('Error fetching students:', error);
    pool.end(); // Close the database connection pool in case of error
    return;
  }
  
  // Send emails to students with low attendance
  results.forEach(student => {
    const mailOptions = {
      from: 'crceacademictracker@gmail.com',
      to: student.email,
      subject: 'Attendance Notification for '+formattedDate,
      text: `Dear ${student.name},\n\nYour total attendance percentage is currently ${student.attendance}%. Your individual subjectwise attendance percent is-\nMaths: ${student.Maths}%\nPhysics: ${student.Phys}%\nChemistry: ${student.Chem}%\nEngineering graphics: ${student.EG}%\nC Programming: ${student.CP}%\nPCE: ${student.PCE}%\n\nYou are at a risk of coming in defaulters list. Please make sure to attend classes regularly.\n\nRegards,\nFr. CRCE`
    };
    
    transporter.sendMail(mailOptions, (error, info  ) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  });

  // Close the database connection pool after sending emails
  pool.end();
});

