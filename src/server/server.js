var express = require('express');
var app = express();
const config = require('./config.js');

let mysql = require('mysql');
  
app.get('/', function (req, res) {
   
    let connection = mysql.createConnection(config.db);

    connection.connect(function(err) {
        if (err) {
          return console.error('error: ' + err.message);
        }
      
        console.log('Connected to the MySQL server.');

        
        // query to the database and get the records
        connection.query('select * from users', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });

      });
      
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


