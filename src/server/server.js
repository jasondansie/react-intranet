const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const config = require('./config');


require('dotenv').config(); 

const { Sequelize } = require('sequelize');
const authMiddleware = require('./authMiddleware');


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

const getFinances = async () =>{
  let result = await db.getFinances();
  return result;
}


  app.get('/getUserById', authMiddleware, async function (req, res) {

    User.findByPk(req.user.userid)
    .then(user => {
      // Return the user data as a JSON response to the client
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    });
  });
  
  app.get('/finances', authMiddleware, async function (req, res) {
    let recordset = await getFinances();
    res.send(recordset);  
  });
  

app.get('/users', async function (req, res) {
  User.findAll()
  .then(users => {
    const columns = Object.keys(users[0].dataValues);
    let dataset = [];

    dataset.push(columns);
    dataset.push(users);

    res.send(dataset);
  })
  .catch(error => {
    console.error(error);
  });

});


app.post('/autorizeUser', async function (req, res) {
    const {email, pwd} = req.body;

    try {   
      const user =await User.findOne({  attributes: ['id', 'firstname', 'password'],
      where: { email: email } })
        .then(user => {      
          return user;
        })
        .catch(err => {
          console.error(err);
      })  
        if (!user || pwd !== user.password) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }

        const payload = { 
          user: { 
            userid: user.id,
            firstname: user.firstname 
          } 
        };

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


