var express = require('express');
var app = express();
const mariadb = require('mariadb');
const config = require('./config');
const db = require('./database');


const getAllU =  async () =>{
    const connection = await mariadb.createConnection(config.db);
    let result = await connection.query('select * from users');
    delete result.meta;
    connection.end();
    return result;  
}

app.get('/', async function (req, res) {
    let recordset = await getAllU();
    res.send(recordset);     
});

var server = app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


