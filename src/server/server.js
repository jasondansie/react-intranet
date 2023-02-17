const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');

require('dotenv').config(); 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  dialect: 'mysql',
  host: config.db.host
});

const User = require('./models/User')(sequelize);

app.use(cors());
app.use(express.json());


const addUser1 = (firstname, lastname, email, password, photofilename,  createdby = "1", accessid = "2", enabled = "1", position = "none", company = "Good Call", resetpassword = true) => (async () => {
  await sequelize.sync(); // sync the model with the database
  const user = await User.create({
    firstname:{firstname},
    lastname: {lastname},
    email: {email},
    password: {password},
    createdby: {createdby},
    accessid: {accessid},
    enabled: {enabled},
    photofilename:{photofilename},
    position: {position},
    company: {company},
    resetpassword: {resetpassword},
    
  });
  
  console.log(user.toJSON()); // print the inserted user object
})();


const getAllU =  async () =>{
    let result = await db.getAllUsers();
    return result;  
}

const getSingleU =  async (user, pass) =>{   
    let result = await db.getSingleUser(user, pass);   
    return result;  
}

// middleware to verify JWT
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
  
  // protected route
  app.get('/api/getData', verifyToken, (req, res) => {
    const user = User.find(u => u.id === req.user.id);
    res.json(user.data);
  });

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

    try {
      console.log("trying user:");
      const user =await User.findOne({ where: { email: email } })
        .then(user => {
          console.log(user);
          return user;
        })
        .catch(err => {
          console.error(err);
      })
      // const user = await User.findOne({ where: { email: email } });
        // const user = await db.checkForUser(email);
        if (!user || pwd !== user.password) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }
        // const userData = await db.getSingleUser(email, pwd );
    
        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
    
        const payload = { user: { userid: user.id, firstname: user.lastname } };
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

// addUser("Jason", "Dansie", "jasondansie@gmail.com", 'Passwd123', "Jason.jpg");
// addUser("Stina", "Dansie", "stina@goodcall.fi", "Passwd123", "Stina.jpg");
// addUser("Sakke", "Turunen", "Sakke@goodcall.fi", "Passwd123", "Sakke.jpg");

app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});


