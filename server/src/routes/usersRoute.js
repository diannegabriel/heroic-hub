const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../models/Users.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPw = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPw });
  await newUser.save();

  res.json({ message: "User registered successfully." });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "User doesn't exist." });
  }

  const isPwValid = await bcrypt.compare(password, user.password);

  if (!isPwValid) {
    return res.json({ message: "Username or password is incorrect." });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_TOKEN);
  res.json({ token, userID: user._id });
});

module.exports = router;
