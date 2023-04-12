const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.REACT_APP_TOKEN_KEY,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

module.exports = createToken;
