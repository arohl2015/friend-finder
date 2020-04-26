// Adding requirement for dependencies within app
var express = require("express");
var path = require ("path");

//After adding dependencies, need to create an Express server within node
var app = express();

//Sets up an initial port that is used in the even listener
//process.env.PORT means: whatever is in the environment variable PORT, 
//or 3000 if there's nothing there.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Need to set up server and route to a series of "route" files.
// Give our server direction on how to respond when users visit or request data from the URLs set up
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// The code below "listens" to start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });