const mariadb = require('mariadb');
const config = require('./config');

const getAllUsers = async () => {

  const connection = await mariadb.createConnection(config.db);

    let result = await connection.query('select * from users');

    delete result.meta;

    connection.end();
}

module.exports = {
  getAllUsers
}