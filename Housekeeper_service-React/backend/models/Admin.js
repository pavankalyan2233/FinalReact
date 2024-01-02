const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    password: String,
});

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;