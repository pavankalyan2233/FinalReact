const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: String,
  roomno: String,
  cleaningexp: String,
});

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

module.exports = FeedbackModel;
