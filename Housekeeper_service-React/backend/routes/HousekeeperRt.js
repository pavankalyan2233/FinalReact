const express = require('express');
const Housekeeper = require('../models/Housekeeper');

const router = express.Router();

// Endpoint to create a new housekeeper
router.post('/create', async (req, res) => {
  try {
    const { name, hostel, floor, rooms, complaints, time, available } = req.body;
    const newHousekeeper = new Housekeeper({ name, hostel, floor, rooms, complaints, time, available });
    const savedHousekeeper = await newHousekeeper.save();
    res.status(201).json(savedHousekeeper);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Endpoint to retrieve all housekeepers
router.get('/all', async (req, res) => {
  try {
    const housekeepers = await Housekeeper.find();
    res.status(200).json(housekeepers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    const hkId = req.params.id;
    const deletedHk = await Housekeeper.findByIdAndDelete(hkId); // Using Housekeeper model for deletion

    if (!deletedHk) {
      return res.status(404).json({ message: 'Housekeeper not found' });
    }

    res.status(200).json({ message: 'Housekeeper deleted successfully', deletedHk: deletedHk });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
