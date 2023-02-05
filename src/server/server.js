var express = require('express');
var app = express();
const db = require('./database');
const cors = require('cors');

app.use(cors());

const getAllU =  async () =>{
    let result = await db.getAllUsers();
    return result;  
}
const getSingleU =  async (user, pass) =>{   
    let result = await db.getSingleUser(user, pass);   
    return result;  
}

app.get('/getall', async function (req, res) {
    let recordset = await getAllU();
    res.send(recordset);     
});

app.get('/getuser/:email', async function (req, res) {
    let login = req.params.email.split("&");
    let recordset = await getSingleU(login[0], login[1]);
    res.send(recordset);     
});

var server = app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


