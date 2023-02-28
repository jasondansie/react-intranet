const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // check if there is a token in the request header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).json({ message: 'Authorization denied' });
  }
  
  try {
    // verify the token and attach the user data to the request object
    const decoded = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
    // const decoded = jwt.decode(token);
    req.user = decoded.user;
    next();
  } catch (err) {
     res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;

