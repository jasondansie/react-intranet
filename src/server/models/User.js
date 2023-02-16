const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(`mysql://${config.db.user}:${config.db.password}@${config.db.host}/${config.db.database}`);

class User extends Model {}
User.define({
  userid: DataTypes.INTEGER,
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: DataTypes.STRING,
}, { sequelize, modelName: 'user' });

module.exports = User;
