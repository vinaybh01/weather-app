const express = require("express");
const router = express.Router();
const User = require("../model/Usermodel");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .sendStatus(400)
      .json({ message: "Username and password are required" });
  }
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(403).json({ message: "Admin already exists" });
  } else {
    await User.create({ username, password });
    res.status(201).json({ message: "User created successfully" });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ message: "Logged in successfully", user });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

module.exports = router;

