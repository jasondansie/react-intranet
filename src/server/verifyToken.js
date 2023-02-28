const jwt = require('jsonwebtoken');

// middleware to verify JWT
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// protected route
app.get('/api/getData', verifyToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  res.json(user.data);
});