const express = require('express'); // Import the Express.js library
const listEndpoints = require('express-list-endpoints'); // Import the express-list-endpoints library

const app = express(); // Create an instance of an Express app

// Define a route for the root path that handles all HTTP methods
// only one response per function get or post 
app.route('/')
  // we can also send a html,json,xml file also as response
  .get(function(req, res) {
    // This function will be called for GET requests
    console.log('Handling GET request');
    res.send('Hello, World! fdf'); // Combine the two messages into a single call
  })
  .post(function(req, res) {
    // This function will be called for POST requests
    console.log('Handling POST request');
    res.send('Received POST request for root route'); // Modify the message to be more descriptive
  });

// Start the server and listen for incoming requests
const port = 3004; // Set the port number
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Endpoints: ${listEndpoints(app)}`); // Output a list of the defined endpoints
});
