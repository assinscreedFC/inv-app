// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes/index.js');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(bodyParser.json());

// Route to get user data
app.use("/api",router);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
