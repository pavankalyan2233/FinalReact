const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
  roomnumber: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
