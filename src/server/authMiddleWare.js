const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  
  // check if there is a token in the request header
  const token = req.header('Authorization') || req.header('authorization');
  // const token = req.header('Authorization');

  console.log("middleToken", token);

  if (!token) {
    return res.status(403).json({ message: 'Authorization denied' });
  }
  
  try {
    // verify the token and attach the user data to the request object
    console.log("key", process.env.REACT_APP_TOKEN_KEY
    );

    let decoded = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
    console.log("decoded", decoded.payload);
    req.user = decoded.payload.user;
    // console.log("req",req.user);
    next();
  } catch (err) {
     res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;