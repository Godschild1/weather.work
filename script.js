var movie = "Soul plane";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {