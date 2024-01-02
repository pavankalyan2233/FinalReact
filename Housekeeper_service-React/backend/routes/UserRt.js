const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Endpoint to create a new user including file upload
router.post("/create", async (req, res) => {
  try {
    const { name, email, number, password, roomnumber } = req.body;

    const newUser = new User({
      name,
      email,
      number,
      password,
      roomnumber,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Express route to fetch user data by email
router.get("/all/:email", async (req, res) => {
  try {
    const email = req.params.email;
    // Query MongoDB to find user by email
    const user = await User.findOne({ email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to retrieve all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint for user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/updatepw", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    // Update user's password
    user.password = password; // Assuming password is received as plain text
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

router.put("/update/:email", async (req, res) => {
  const userEmail = req.params.email;
  const { name, email, number, password, roomnumber } = req.body;

  try {
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's data
    user.name = name || user.name;
    user.email = email || user.email;
    user.number = number || user.number;
    user.password = password || user.password;
    user.roomnumber = roomnumber || user.roomnumber;

    await user.save();

    return res
      .status(200)
      .json({ message: "User data updated successfully", user });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
