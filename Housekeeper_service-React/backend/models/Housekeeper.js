const mongoose = require("mongoose");

const HousekeeperSchema = new mongoose.Schema({
  name: String,

  hostel: String,

  floor: Number,

  rooms: Number,

  complaints: String,

  time: String,

  available: String,
});

const HousekeeperModel = mongoose.model("Housekeeper", HousekeeperSchema);

module.exports = HousekeeperModel;
