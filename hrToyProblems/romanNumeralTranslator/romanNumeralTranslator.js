
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  //edge case
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  // split string into array
  var numbers = [];
  // translate using digit values var
  for (var i = 0; i < romanNumeral.length; i ++) {
    for (var key in DIGIT_VALUES) {
      if (key === romanNumeral[i]) {
        numbers.push(DIGIT_VALUES[key])
      }
    }
  }
  var result = 0;
  for (var j = 0; j < numbers.length; j ++) {
    if (Number(numbers[j+1]) > Number(numbers[j])) {
      result -= Number(numbers[j]);
      // otherwise, add
    } else {
      result += Number(numbers[j]);
    }
  }
  // console.log(result);
  return result;
};

// test
// translateRomanNumeral('IV') // 4
// translateRomanNumeral('XV') // 15
// translateRomanNumeral('MDXL') // 1540