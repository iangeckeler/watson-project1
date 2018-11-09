//watson tone analyzer
//var request = require("request")
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
const requireText = require('require-text');
const fs = require('fs')
import toneSorter from './reader.js'


// var personalityInsights = new PersonalityInsightsV3({
//     version: '2017-10-13',
//     iam_apikey: "OaD9aCGhXNyjdoum7H0UMoZ94v3DaVf19oY9yFTw39sA",
//     url: 'https://gateway.watsonplatform.net/personality-insights/api'
// });
// //load text as stringify
// var index = requireText('./content.txt', require);
//
//
// var profileParams = {
//   // Get the content from the JSON file.
//   content: index,
//   content_type: 'text/plain',
//   content_language: 'en',
//   consumption_preferences: true,
//   raw_scores: true
// };
//
//
// personalityInsights.profile(profileParams, function(error, profile) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(profile, null, 2));
//   }
// });

// // tone analyzer
// var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
//
// //api and requirements
// var toneAnalyzer = new ToneAnalyzerV3({
//   version_date: '2017-09-21',
//   iam_apikey: 'jIavl_avmdfmEBuoql6Wm-BDL7mc4T4Dxjhog2CyULZ7',
//   url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
// });
//
// //read in contenttext file
// const text = requireText('./content.txt', require)
//
// var toneParams = {
//   tone_input: { 'text': text },
//   content_type: 'application/json'
// };
//
// toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.stringify(toneAnalysis, null, 2));
//     //currently writes to JSON file and saves it
//     let data = JSON.stringify(toneAnalysis);
//     fs.writeFileSync('toneAnalysis.json', data);
//   }
// });

let rawdata = fs.readFileSync('toneAnalysis.json');
let tone = JSON.parse(rawdata);
let overallTone = tone.document_tone.tones
console.log(overallTone);
console.log(overallTone.length)
console.log(toneSorter(overallTone))
