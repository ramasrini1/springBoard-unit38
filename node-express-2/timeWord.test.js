const Time = require('./time');
const {validateInput, getInputTime } = require('./timeWord');

let data = 
[
  "00:00", "00:12", "01:00", "06:01", "06:10", "06:18", "06:30", "10:34", 
  "12:00", "12:09", "23:23"
];
let values = 
[
  "midnight", "twelve twelve am", "one o'clock am", "six oh one am", 
  "six ten am", "six eighteen am", "six thirty am", "ten thirty four am", 
  "noon", "twelve oh nine pm", "eleven twenty three pm"
]

describe('TimeWord validateInput', () => {
  test('Valid Data', () => {
    expect(validateInput("06:01")).toEqual(true);
  });
  test('InValid Data', () => {
    expect(validateInput("06r:01")).toEqual(false);
  });
});

describe('ConvertTimeToWord', () => {
  test('ConvertTimeToWord', () => {
    for ( let i=0; i< data.length; i++){
      let time = new Time(data[i]);
      expect(time.convertTimeToWord()).toEqual(values[i]);
    }
  });
});