/*
 * Primary file for the Pizza Delivery API
 *
 */

// Dependencies
const server = require('./lib/server');

// Declare the app
const app = {};

// Init function
app.init = () => {
  // Start the server
  server.init();
};

// Execute
app.init();

// Export the app module
module.exports = app;
