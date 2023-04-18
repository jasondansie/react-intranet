const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Report', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        Company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Businessid: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phonenumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Agentinnimi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Tila: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        Soitonlopputulos: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Soitonlopputuloslisätieto: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Soittolista: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Kampanja: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Calltime: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Kellonaika: {
            type: DataTypes.TIME,
            allowNull: true
        },
        Title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Category: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Duration_min: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Talktime_min: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        Profit: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    });
}

