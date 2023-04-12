const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const config = require('./config');


require('dotenv').config(); 

const { Sequelize } = require('sequelize');
const authMiddleware = require('./authMiddleware');
const createToken = require('./tokenMiddleWare');


const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  dialect: 'mysql',
  host: config.db.host
});

const User = require('./models/User')(sequelize);

app.use(cors());
app.use(express.json());


// const addUser1 = (firstname, lastname, email, password, photofilename,  createdby = "1", accessid = "2", enabled = "1", position = "none", company = "Good Call", resetpassword = true) => (async () => {
//   await sequelize.sync(); // sync the model with the database
//   const user = await User.create({
//     firstname:{firstname},
//     lastname: {lastname},
//     email: {email},
//     password: {password},
//     createdby: {createdby},
//     accessid: {accessid},
//     enabled: {enabled},
//     photofilename:{photofilename},
//     position: {position},
//     company: {company},
//     resetpassword: {resetpassword},
    
//   });
// })();

const getFinances = async () =>{
  let result = await db.getFinances();
  return result;
}


  app.get('/getUserById', authMiddleware, function (req, res) {
    console.log("req",req);
    User.findByPk(req.user.userid)
    .then(user => {
      // Return the user data as a JSON response to the client
      res.json(user);
    })
    .catch(err => {
      res.status(408).json({ error: err });
    });
  });
  
  app.get('/finances', authMiddleware, async function (req, res) {
    let recordset = await getFinances();
    res.send(recordset);  
  });
  

app.get('/users', function (req, res) {
  User.findAll()
  .then(users => {
    const columns = Object.keys(users[0].dataValues);
    let dataset = [];

    dataset.push(columns);
    dataset.push(users);

    res.send(dataset);
  })
  .catch(error => {
    res.status(404).json({ error: 'Info not found' });
  });

});


app.post('/autorizeUser', async function (req, res) {
    const {email, pwd} = req.body;

    try {   
      const userData = await User.findOne({  attributes: ['id', 'firstname', 'password', 'email'],
      where: { email: email } })
        .then(userData => {   
          // console.log("userdata", userData);   
          return userData;
        })
        .catch(err => {
          res.status(404).json({ error: 'Info not found' });
      })  
        if (!userData || pwd !== userData.password) {
          return res.status(401).json({ error: 'Invalid email or password' });
        }
        
        const payload = { 
          user: { 
            userid: userData.id,
            firstname: userData.firstname,
            email: userData.email,
            password: userData.password
          } 
        };
        console.log("payload: ", payload);
        const token = await createToken({payload});

        console.log("token: ", token);
        res.json(token);

      } catch (err) {
        res.status(500).send('Server Error');
      }    
});

// addUser("Jason", "Dansie", "jasondansie@gmail.com", 'Passwd123', "Jason.jpg");
// addUser("Stina", "Dansie", "stina@goodcall.fi", "Passwd123", "Stina.jpg");
// addUser("Sakke", "Turunen", "Sakke@goodcall.fi", "Passwd123", "Sakke.jpg");

app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});
