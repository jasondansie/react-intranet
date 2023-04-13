const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const config = require('./config');


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

app.post('/users', (req, res) => {
  // Get the user data from the request body
  const { firstname, lastName, email, password, photoFilename, createdBy, accessId, enabled, position, company, resetPassword, resetPasswordTime } = req.body;

  // Create a new instance of the User model with the user data
  const newUser = User.build({
      firstname,
      lastName,
      email,
      password,
      photoFilename,
      createdBy,
      accessId,
      enabled,
      position,
      company,
      resetPassword,
      resetPasswordTime
  });

  // Save the new user to the database
  newUser.save()
      .then(savedUser => {
          // Return a success response with the saved user data
          res.status(201).json(savedUser);
      })
      .catch(error => {
          // Return an error response if there was a problem saving the user
          console.error('Error saving user:', error);
          res.status(500).json({ error: 'Error saving user' });
      });
});


  app.get('/getUserById', authMiddleware, function (req, res) {
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


app.post('/authorizeUser', async function (req, res) {
    const {email, pwd} = req.body;
    console.log("req", req.body);
    try {   
      const userData = await User.findOne({  attributes: ['id', 'firstname', 'password', 'email'],
      where: { email: email } })
        .then(userData => { 
          console.log("userData", userData.firstname); 
          return userData;
        })
        .catch(err => {
          res.status(404).json({ error: 'Info not found' });
      })  
      console.log("password", userData.password); 
        if (!userData || pwd !== userData.password) {
          console.log("wrong password", userData.password);
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
        
        console.log("payload", payload); 
        
        try {
          const token = await createToken({payload}); 
          console.log("payload", payload);     
          res.json(token);
        } catch (error) {
          
        }
      } catch (err) {
        res.status(500).send('error creating token');
      }    
});

// addUser("Jason", "Dansie", "jasondansie@gmail.com", 'Passwd123', "Jason.jpg");
// addUser("Stina", "Dansie", "stina@goodcall.fi", "Passwd123", "Stina.jpg");
// addUser("Sakke", "Turunen", "Sakke@goodcall.fi", "Passwd123", "Sakke.jpg");

app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});
