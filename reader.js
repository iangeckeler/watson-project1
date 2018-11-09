//testing out a function that will let me store the score from the api in an array
// const fs = require('fs')
// let rawdata = fs.readFileSync('toneAnalysis.json');
// let tone = JSON.parse(rawdata);
// let overallTone = tone.document_tone.tones
// console.log(overallTone);
// console.log(overallTone.length)

//write a function that will pull out all of the tones into an easier to use object with joyscore and sadness raw_scores
const toneSorter = (toneObj) => {
  let joyScore =0;
  let sadScore =0;
  for (let i=0;i<toneObj.length;i++) {
    //initialize variables
    if (toneObj[i].tone_id == 'joy') {
      joyScore = toneObj[i].score
    } else if (toneObj[i].tone_id == 'sadness')  {
      sadScore = toneObj[i].score
    }
  }
  return [joyScore,sadScore]
}
export default toneSorter
