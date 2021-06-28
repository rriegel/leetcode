/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

// example
// reverseInteger(367) // 763
function reverseInteger(number){
  // reverse number variable
  var reverseNum = 0;
  // while number is greater than 0
  while (number > 0) {
    // multiply reverse number by 10
    reverseNum = (reverseNum * 10);
    // add (the modulo 10 of number) into reverse number
    reverseNum += (number % 10);
    // divide number by 10 and rounding it down to get rid of the decimal
    number = Math.floor(number / 10);
  }
  // return reverse number
  return reverseNum;
}
