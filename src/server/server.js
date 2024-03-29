const express = require('express');
const app = express();
const db = require('./database');
const cors = require('cors');
const config = require('./config');


const { Sequelize } = require('sequelize');
const authMiddleware = require('./authMiddleware');
const createToken = require('./tokenMiddleWare');

console.log("host", config.db.host);
console.log("database", config.db.database);
console.log("user", config.db.user);


const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./models/User')(sequelize);
const CallReport = require('./models/Report')(sequelize);

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
  sequelize
    .authenticate()
    .then(() => {
      res.send('Connection has been established successfully.');
    })
    .catch((err) => {
      res.send('Unable to connect to the database:', err);
    });
});


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
    try {   
      const userData = await User.findOne({  attributes: ['id', 'firstname', 'password', 'email'],
      where: { email: email } })
        .then(userData => { 
          
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
        try {
          console.log("payload", payload);
          const token = await createToken({payload});             
          res.json(token);
        } catch (error) {
          
        }
      } catch (err) {
        res.status(500).send('error creating token');
      }    
});

app.post("/uploadxlsx", async function (req, res) {
    const {callData} = req.body;
    // console.log("req", jsonData);

    sequelize.query('TRUNCATE TABLE Reports;');

    const columnNames = callData.shift();

    for (const data of callData) {
      const row = {};
      for (let i = 0; i < columnNames.length; i++) {
        const key = columnNames[i].replace(' ', ''); // remove spaces from column names
        row[key] = data[i];
        if (i === 18) {
          console.log("changing 18")
          const key = columnNames[i].replace('Duration(min)', 'durationmin'); // remove spaces from column names
          row[key] = data[i];
        }
      }
      
      for (let i = 0; i < columnNames.length; i++) {
        const key = columnNames[i].replace('Talktime(min)', 'talktimemin'); // remove spaces from column names
        row[key] = data[i];
      }
      console.log('row', row);
      try {
        await CallReport.create(row);
        console.log("row created.");
      } catch (error) {
        console.error('Error saving user:', error);
        return  'Problem saving row' + error;
      }
    }
    res.status(200).json({msg: 'data saved'});
});

app.get('/reports/:agentName', async (req, res) => {
  const agentName = req.params.agentName;

  try {
    const reports = await CallReport.findAll({
      where: {
        Agentinnimi: agentName
      }
    });
    res.status(200).json(reports);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(5000, function () {
    console.log('Server is running on port 5000..');
});
