const Request = require("../models/Request");
const express = require("express");
const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const request = await Request.find();
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const requestId = req.params.id;

  try {
    const deletedRequest = await Request.findByIdAndDelete(requestId);

    if (!deletedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res.status(200).json({ message: "Request deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
