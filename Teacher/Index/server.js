
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Replace the following with your MySQL connection details
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'college'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the college database.');
});

app.post('/check', (req, res) => {
  const subject = req.body.subject;
  const percentage = req.body.percentage;

  let sql;
  if (subject === 'Total') {
    sql = `SELECT * FROM attendance WHERE attendance < ${percentage}`;
  } else {
    sql = `SELECT * FROM attendance WHERE ${subject} < ${percentage}`;
  }

  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 