const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    // 401 error means token wasn't provided or malformed
    res.status(401).send("Invalid credentials");
  } else {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // 403 error means token has been provided but no access
        res.status(403).send("Invalid credentials");
      } else {
        // next() allows the router to go to the next section
        next();
      }
    });
  }
};
