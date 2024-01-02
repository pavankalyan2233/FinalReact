const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
  roomnumber: String,
});

const RequestModel = mongoose.model('Request', RequestSchema);

module.exports = RequestModel;
