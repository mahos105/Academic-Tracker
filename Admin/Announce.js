var express = require('express');
var http = require('http');
var path = require('path');
var nodemailer = require('nodemailer');
var mysql = require('mysql');
var cors = require('cors');

var app = express();
app.use(cors());

var server = http.Server(app);
var port = 5000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "page/index.html")));

// MySQL database connection configuration
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college'
});

// Establish MySQL connection
connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Routing
app.post("/send-email", function (req, res) {
  var from = req.body.from;
  var subject = req.body.subject;
  var message = req.body.message;

  // Query email addresses from MySQL database
  connection.query('SELECT * FROM email', function (err, rows) {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      res.status(500).send('Error querying database');
      return;
    }
    let emailsArray = rows.map(row => row.emails);
    console.log(emailsArray)


    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'crceacademictracker@gmail.com',
        pass: 'oabk wetn nfwi wwcs'
      }
    });

    var mailOptions = {
      from: from,
      bcc: emailsArray, // Add all email addresses in BCC field
      subject: subject,
      text: message
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('Error sending email: ' + error.stack);
        res.status(500).send('Error sending email');
        return;
      }
      console.log("Emails sent: " + info.response);
      res.status(200).json({data: "success"}); // Send success response
    });
  });
});

// Initialize Web Server
server.listen(port, function () {
  console.log("Starting Server on port: " + port);
});