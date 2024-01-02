const Assign = require("../models/Assign");
const express = require("express");
const router = express.Router();

// Route to create Assign
router.post("/create", async (req, res) => {
  try {
    const { name, roomno, housekeeper } = req.body;

    const newAssign = new Assign({
      name,
      roomno,
      housekeeper,
    });

    const savedAssign = await newAssign.save();

    res
      .status(201)
      .json({ message: "Assign saved successfully", data: savedAssign });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to save Assign", error: error.message });
  }
});

// Route to get all Assign
router.get("/all", async (req, res) => {
  try {
    const assign = await Assign.find();
    res.status(200).json(assign);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve Assign", error: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const assignmentId = req.params.id;

    // Find the assignment by ID and delete it
    const deletedAssignment = await Assign.findByIdAndDelete(assignmentId);

    if (!deletedAssignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({ message: "Assignment deleted successfully", data: deletedAssignment });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete assignment", error: error.message });
  }
});

module.exports = router;

module.exports = router;
