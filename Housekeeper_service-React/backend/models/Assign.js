const mongoose = require("mongoose");

const AssignSchema = new mongoose.Schema({
  name: String,
  roomno: String,
  housekeeper: String,
});

const AssignModel = mongoose.model("Assign", AssignSchema);

module.exports = AssignModel;
