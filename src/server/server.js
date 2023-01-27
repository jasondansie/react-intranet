var express = require('express');
var app = express();
//const config = require('./config.js');
const mariadb = require('mariadb');
const config = require('./config');
const db = require('./database');

  
const getAllU =  async () =>{

    const connection = await mariadb.createConnection(config.db);

    console.log("connection: ",connection);

    let result = await connection.query('select * from users');

    delete result.meta;

    console.log(result);

    connection.end();

    return result;

    
}

app.get('/', function async (req, res) {
   
    // let connection = mysql.createConnection(config.db);

    // connection.connect(function(err) {
    //     if (err) {
    //       return console.error('error: ' + err.message);
    //     }
      
    //     console.log('Connected to the MySQL server.');

        
        // // query to the database and get the records
        // connection.query('select * from users', function (err, recordset) {
            
        //     if (err) console.log(err)

        //     // send records as a response
        //     res.send(recordset);
            
        // });

    //   });

   

    let recordset = await getAllU();
    console.log("recordset: ",recordset);
      res.send(recordset);
      
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


