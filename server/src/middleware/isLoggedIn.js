module.exports = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).send("Invalid credentials");
  } else {
    const token = authHeader.split(" ")[1];
    console.log(token)
  }
}