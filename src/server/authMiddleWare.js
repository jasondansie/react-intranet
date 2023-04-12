const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  console.log("middAuthorizationleToken", req.header('Authorization'));
  
  // check if there is a token in the request header
  const authHeader = req.header('Authorization') || req.header('authorization');
  const token = req.header('Authorization');

  console.log("middleToken", token);

  if (!token) {
    return res.status(403).json({ message: 'Authorization denied' });
  }
  
  try {
    // verify the token and attach the user data to the request object
    const decoded = jwt.verify(token, process.env.REACT_APP_TOKEN_KEY);
    console.log("decoded",decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
     res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;