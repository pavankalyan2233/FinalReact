const User = require('../models/User');
const Request = require('../models/Request');

async function moveUserData(email) {
  try {
    const userData = await User.findOne({ email });

    if (!userData) {
      console.error('No data found for the provided email.');
      return false;
    }

    const requestData = new Request(userData.toObject());

    await requestData.save();

    console.log('Data moved to Request collection.');
    return true;
  } catch (err) {
    console.error('Error moving data:', err);
    return false;
  }
}

module.exports = { moveUserData };
