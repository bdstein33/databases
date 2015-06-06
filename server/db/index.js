var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

exports.access = function(queryString, cb) {
  dbConnection.query(queryString, function(err, rows) {
    cb(rows);
  });
};
