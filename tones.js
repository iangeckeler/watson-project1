//watson tone analyzer
//var request = require("request")
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var requireText = require('require-text');


var personalityInsights = new PersonalityInsightsV3({
    version: '2017-10-13',
    iam_apikey: "OaD9aCGhXNyjdoum7H0UMoZ94v3DaVf19oY9yFTw39sA",
    url: 'https://gateway.watsonplatform.net/personality-insights/api'
});
//load text as stringify
var index = requireText('./content.txt', require);
console.log(index)


var profileParams = {
  // Get the content from the JSON file.
  content: index,
  content_type: 'text/plain',
  content_language: 'en',
  consumption_preferences: true,
  raw_scores: true
};


personalityInsights.profile(profileParams, function(error, profile) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(profile, null, 2));
  }
});
