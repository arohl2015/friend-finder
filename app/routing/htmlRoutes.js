// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// First, need to include path to map to our html
var path = require("path");

// next, need to export the data
module.exports = function(app) {
// HTML GET Request to survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
// Default route to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};