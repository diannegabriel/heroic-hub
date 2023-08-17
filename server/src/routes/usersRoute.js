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

router.post("/login");

module.exports = router;
