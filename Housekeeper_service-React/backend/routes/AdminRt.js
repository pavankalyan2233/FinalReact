const express = require('express');
const Admin = require('../models/Admin');

const router = express.Router();

// Endpoint to create a new admin
router.post('/create', async (req, res) => {
  try {
    const { name, email, number, password } = req.body;
    const newAdmin = new Admin({ name, email, number, password });
    const savedAdmin = await newAdmin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to retrieve all admins
router.get('/all', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint for admin login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', admin });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/updatepw', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    
    // Update admin's password
    admin.password = password; // Assuming password is received as plain text
    await admin.save();
    
    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
