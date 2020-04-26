// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// First, need to create a variable to hold my friendsArray data
var friends = require("../data/friends.js");

// next, need to export the data
module.exports = function(app) {
// API GET Request
 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Request
app.post("/api/friends", function(req, res) {
    //Our server will respond to requests and let users know about survey results
    // It will do this by sending out the value "true"
