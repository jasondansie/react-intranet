require('dotenv').config();

var express = require('express');
var app = express();

const cors = require('cors');
const db = require('./database');
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(express.json());


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

app.post('/getSingleUser', async function (req, res) {  
    const { email, password } = req.body;

    try {
        let foundUser = await db.findUserName(email);
        const jwtSecret = process.env.JWT_SECRET;
        console.log("foundUser",foundUser);
        console.log("env",jwtSecret);  
      
      if (foundUser.length === 0) return res.status(400).json({ msg: 'Invalid Credentials' });
  
      let user = await getSingleU(email, password);
      
      if (user.length === 0) return res.status(400).json({ msg: 'Invalid Credentials' });
  
      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        process.env.REACT_APP_JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }  
})

app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


