if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());
// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api', (request, response) => {
  response.json({
    message: 'Hello from server.js'
  });
});

// example - /api/places?query=miami
app.get('/api/places', (req, res) => {
  const city = req.query.query;
  axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=dog%20park%20${city}&key=${process.env.NODE_ENV_GOOGLE_MAPS_API_KEY}`
    )
    .then((data) => {
      res.send(data.data);
    });
});
// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
