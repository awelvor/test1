let mysql = require('mysql2');

let con = mysql.createConnection({
  host: "localhost",
  user: "philippe",
  password: "mowgli"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
