const mariadb = require('mariadb');
const config = require('./config');

const getAllUsers = async () => {
  const connection = await mariadb.createConnection(config.db);

    let result = await connection.query('select * from users');

    delete result.meta;

    connection.end();
}

const getSingleUser = async (user, pass) => {
  const connection = await mariadb.createConnection(config.db);

  let result = await connection.query('SELECT * from users WHERE email = ? AND password = ?' ,[ user, pass]);

  delete result.meta;

  connection.end();
  return result;
}

const findUserName = async (user) => {
  const connection = await mariadb.createConnection(config.db);

  let result = await connection.query('SELECT email from users WHERE email = ?' ,[ user]);

  delete result.meta;

  connection.end();
  return result;
}

module.exports = {
  getAllUsers, getSingleUser, findUserName
}