const jwt = require('jsonwebtoken');

const createToken = (payload) => {

    jwt.sign(
        payload,
        process.env.REACT_APP_TOKEN_KEY,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          return token;
        }
      );
}


export default createToken;