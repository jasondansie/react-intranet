const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  
  // check if there is a token in the request header
  const token = req.header('Authorization') || req.header('authorization');

  if (!token) {
    return res.status(403).json({ message: 'Authorization denied' });
  } 
  try {
    // verify the token and attach the user data to the request object
    let decoded = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
    req.user = decoded.payload.user;
    next();
  } catch (err) {
     res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;