"use strict";

const Time = require("./time");

let timeStr = "";

function getInputTime(){
  const argv = process.argv;
  if (! argv[2] ) {
    console.log("Argument missing, run cmd node timeWord.js 06:00");
    process.exit();
  }
  return argv[2];
}

/*
  Input Data has to be 06:01
  2 digits for hours and 2 digits for minutes with : in between.
*/
function validateInput(timeStr){
 
  if (timeStr.length !== 5){
    return false;
  }

  let str1 = +timeStr.substring(0, 2);
  let str2 = +timeStr.substring(3, 5);
  
  if (isNaN(str1)){
    return false;
  }
  
  if (isNaN(str2)){
    return false;
  }

  let hr = parseInt(str1);
  let min = parseInt(str2);
   
  if (! (hr >= 0 && hr < 23) ){
     return false;
  }

  if (! (min >= 0 && hr < 60) ){
     return false;
  }
  return true;
}

// Get InputValue from commandline
timeStr = getInputTime();

//If valid input convert to time word
if ( validateInput(timeStr)){
  let time = new Time(timeStr);
  console.log("Input time: " + timeStr + " in words " + 
  time.convertTimeToWord());
} else {
  console.log("Bad input data " + timeStr);
}

module.exports = {validateInput, getInputTime};