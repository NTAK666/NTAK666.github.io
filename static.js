var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6411079",
  password: "gPuDTAsPjd"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});