const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    photoFilename: {
      type: DataTypes.STRING
    },
    createdBy: {
      type: DataTypes.INTEGER
    },
    accessId: {
      type: DataTypes.INTEGER
    },
    enabled: {
      type: DataTypes.INTEGER
    },
    position: {
      type: DataTypes.STRING
    },
    company: {
      type: DataTypes.STRING
    },
    resetPassword: {
      type: DataTypes.BOOLEAN
    },
    resetPasswordTime: {
      type: DataTypes.DATE
    }
  });
};