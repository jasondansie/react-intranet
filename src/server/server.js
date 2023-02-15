var express = require('express');
var app = express();
const db = require('./database');
const cors = require('cors');
const jwt = require('jsonwebtoken');

require('dotenv').config(); 

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
    const {email, pwd} = req.body;

    console.log(`email: ${email} password: ${pwd}`);

    try {
        
        const user = await db.checkForUser(email);
        if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });
        const userData = await db.getSingleUser(email, pwd );
    
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
    
        const payload = { user: { id: userData.id } };
        jwt.sign(
          payload,
          process.env.REACT_APP_TOKEN_KEY,
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
});

app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


