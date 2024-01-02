const Feedback = require('../models/Feedback');
const express = require('express');
const router = express.Router();

// Route to create feedback
router.post('/create', async (req, res) => {
  try {
    const { name, roomno, cleaningexp } = req.body;

    const newFeedback = new Feedback({
      name,
      roomno,
      cleaningexp,
    });

    const savedFeedback = await newFeedback.save();

    res.status(201).json({ message: 'Feedback saved successfully', data: savedFeedback });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save feedback', error: error.message });
  }
});

// Route to get all feedback
router.get('/all', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve feedback', error: error.message });
  }
});

module.exports = router;
