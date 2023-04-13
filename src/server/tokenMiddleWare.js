const jwt = require('jsonwebtoken');

require('dotenv').config();

const createToken = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const token = await jwt.sign(
        payload,
        process.env.REACT_APP_TOKEN_KEY,
        { expiresIn: 3600 }
      );
      resolve(token);
    } catch (err) {
      console.log("error creating token");
      reject(err);
    }
  });
}

module.exports = createToken;
