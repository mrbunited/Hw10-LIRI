require("dotenv").config();
var keys = require("./keys.js");
var twitter = require("twitter");

var input = process.argv[2];
var query = process.argv[3];
console.log(input);
console.log(query);

function showTweets() { 
    var client = new twitter(keys.twitterKeys);
     
    var params = {screen_name: "newontheblock", count: 20};
    
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
                if (error) {
                    console.log("There is an error");
                }
                else{
                    console.log("My 20 latest tweets:")
                console.log("====================");
                for (var i = 0; i < tweets.length; i++){
                    console.log("Tweet # " + (i+1) + ".");
                    console.log(tweets[i]);
                }
                }

            })

        };

function showSpotify(){};
function showMovie(){};
function showRandom(){
    var fs = require("fs");
};

if (input === "my-tweets"){
showTweets();
}
else if (input === "spotify-this-song"){
showSpotify();
}
else if (input === "movie-this"){
showMovie();
}
else if (input === "do-what-it-says"){
showRandom();
}