console.log("js file loaded");
$("#surveyButton").on("click", function(event) {
    event.preventDefault;
    var userRecord = {
        name:$("#name").val(),
        photo:$("#picture").val(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#question10").val()
        ]
    }
    console.log(userRecord);
    $.ajax(
        {
            url:"/api/friends", 
            data:userRecord,
            type: "POST",
            success: function(response) {
                console.log(response);
                //modal inside - bestmatch
            }
        })
})