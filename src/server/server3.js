const express = require('express');
const Sequelize = require('sequelize');
const app = express();

const config = require('./config');

const authMiddleware = require('./authMiddleware');
const createToken = require('./tokenMiddleWare');



// Set up Sequelize
const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: 'localhost',
  dialect: 'mysql'
});

const User = require('./models/User')(sequelize);

// Test endpoint
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

app.get('/users', async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
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

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
