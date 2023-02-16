module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
      userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'users'
    });
  };