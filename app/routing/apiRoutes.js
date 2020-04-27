// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// First, need to create a variable to hold my friendsArray data
var friends = require("../data/friends.js");

// next, need to export the data
module.exports = function (app) {
    // API GET Request to display JSON of all friends
    app.get("/api/friends", function (request, response) {
        response.json(friends);
    });
    // API POST Request to handle the incoming survey results
    app.post("/api/friends", function (request, response) {
        console.log(request.body.scores);
        //this variable receives all the user data
        var currentUser = request.body;
        // Determine the user's most compatible friend using the following as a guide:
        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        // question by question. Add up the differences to calculate the totalDifference.
        for (var i = 0; i < currentUser.scores.length; i++) {
            currentUser.scores[i] = parseInt(currentUser.scores[i]);
        }
        //create variables to create the match and difference between scores
        var friendsIndex = 0;
        var minScore = 100;
        //Need to create a for loop that compares the difference between current user's scores against those from other users
        for (var i = 0; i < friends.length; i++) {
            var totalScore = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
        //Remember to use the absolute value of the differences - Math.abs returns the absolute value of the given number.
                var score = Math.abs(currentUser.scores[j] - friends[i].scores[j]);
                totalScore += score;
        //The closest match will be the user with the least amount of difference.
            }
            if (totalScore < minScore) {
                friendsIndex = i;
                minScore = totalScore;
            }
        }
        //Add currentUser to the friends array after a match is found and push the data
        friends.push(currentUser);

        //Last step is to send this back to the browser
        response.json(friends[friendsIndex]);
    });
};