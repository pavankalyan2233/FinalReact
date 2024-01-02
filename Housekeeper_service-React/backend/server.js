const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const UsersRoute = require('./routes/UserRt');
const AdminRoute = require('./routes/AdminRt')
const HousekeeperRoute = require('./routes/HousekeeperRt')
const dataTransfer = require('./routes/dataTransfer');
const cors = require('cors');
const FeedbackRoute = require('./routes/FeedbackRt')
const AssignRoute = require('./routes/AssignRt')
const RequestRoute = require('./routes/RequestRt')
const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes

app.use(bodyParser.json());

// Set CORS headers in a separate middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Routes
app.use('/User', UsersRoute);
app.use('/Admin', AdminRoute); 
app.use('/Housekeeper', HousekeeperRoute);
app.use('/Feedback', FeedbackRoute);
app.use('/Assign', AssignRoute);
app.use('/Request', RequestRoute);
app.post('/movedata', async (req, res) => {
  const { email } = req.body;

  try {
    const result = await dataTransfer.moveUserData(email);

    if (result) {
      return res.sendStatus(200);
    } else {
      return res.sendStatus(404);
    }
  } catch (err) {
    console.error('Error moving data:', err);
    return res.sendStatus(500);
  }
});
// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
