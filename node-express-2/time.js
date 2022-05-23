const num = "twelve one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

class Time {
  constructor(timeStr) {
    let str1 = timeStr.substring(0, 2);
    let str2 = timeStr.substring(3, 5);

    this.hr = parseInt(str1);
    this.min = parseInt(str2);
  }

  
  getAmPm(){
    if ( this.hr >= 0 && this.hr < 12 ){
      return 'am'
    }
    return 'pm';
  }

  /* Get minute str, 6 should be six and 24 should be twenty four
  * For ex 12:09 should be 12:09	twelve oh nine pm. 
  * And minute value will be oh nine.
  * If timeStr is 01:00	the time would be one o’clock am. The minute value 
  * would be o'clock.
  */
  getMinuteWord(){
    let minValue = "";
    let minute = "";

    if ( this.min < 20 ){
      minValue = num[this.min];
    } else {
        let onesDigit = this.min % 10;
        let tensDigit = Math.floor(this.min/10) - 2 ;
  
        if ( this.min % 10 === 0 ){
          minValue = tens[tensDigit];
        } else {
          minValue = tens[tensDigit] + " " + num[onesDigit];
        }
    }
  
    if ( this.min > 0 && this.min < 10 ){
      minute = "oh " + minValue;
    } else if ( this.min >= 10) {
      //Get the digit value in words no prefix
      minute = minValue
    } else {
      //this.min is 0
      minute = "o'clock";
    }
    return minute;  
  }

  getHrWord(){
    let hour = "";
    if ( this.hr <= 12 ){
      hour = num[this.hr];
    } else if ( this.hr > 12  ){
      hour = num[this.hr - 12];
    } 
    return hour;
  }

  convertTimeToWord() {
    
    //if it is 00:00 return midnight
    if ( this.hr === 0 && this.min === 0){
      return "midnight";
    }

    // if it is 12:00 return noon
    if ( this.hr === 12 && this.min === 0){
      return "noon";
    }

    //Get am or pm
    let amPm = this.getAmPm();
    
    //Get minute str
    let minute = this.getMinuteWord()

    //Get hour str
    let hr = this.getHrWord()
    
    let timeWord = hr + " " + minute + " " + amPm;
    
    return timeWord;
  }

}

module.exports = Time;