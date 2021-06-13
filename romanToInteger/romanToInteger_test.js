import romanToInt from './romanToInteger.js';

var test = () => {
  console.log(romanToInt('I')) // should be 1

  console.log(romanToInt('IV')) // should be 4

  console.log(romanToInt('XII')) // should be 12

  console.log(romanToInt('LVIII')) //should be 58

  console.log(romanToInt('MCMXCIV')) //should be 1994
};

test();