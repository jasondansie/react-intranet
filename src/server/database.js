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

  let result = await connection.query(`SELECT * from users WHERE email = "${user}" AND password ="${pass}"`);

  delete result.meta;

  connection.end();
  return result;
}

module.exports = {
  getAllUsers, getSingleUser
}