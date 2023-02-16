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

  let result = await connection.query('SELECT `userid`, `createddate`, `createdby`, `accessid`, `firstname`, `lastname`, `email`,  `enabled`, `resetpassword`, `resetpasswordtime`, `photofilename`, `position`, `company`, `author_description`, `author_title`, `author_sig`, `author_image`, `startdate` FROM `users` WHERE email = ?  AND password = ?' ,[ user, pass]);

  delete result.meta;

  connection.end();
  return result;
}

const checkForUser = async(user) => {
  const connection = await mariadb.createConnection(config.db);

  let result = await connection.query('SELECT email from users WHERE email = ?' ,[user]);

  delete result.meta;

  connection.end();
  return result;
}

module.exports = {
  getAllUsers, getSingleUser, checkForUser
}