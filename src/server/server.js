var express = require('express');
var app = express();
const mariadb = require('mariadb');
const config = require('./config');
const db = require('./database');
const cors = require('cors');

app.use(cors());

const getAllU =  async () =>{
    const connection = await mariadb.createConnection(config.db);
    let result = await connection.query('select * from users');
    delete result.meta;
    connection.end();
    return result;  
}
const getSingleU =  async (user) =>{
    const connection = await mariadb.createConnection(config.db);
    let result = await connection.query(`SELECT * from users WHERE email="${user}"`);
    delete result.meta;
    connection.end();
    return result;  
}

app.get('/getall', async function (req, res) {
    console.log("getting all records");
    let recordset = await getAllU();
    res.send(recordset);     
});

app.get('/getuser/:email', async function (req, res) {
    let recordset = await getSingleU(req.params.email);
    res.send(recordset);     
});

var server = app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


