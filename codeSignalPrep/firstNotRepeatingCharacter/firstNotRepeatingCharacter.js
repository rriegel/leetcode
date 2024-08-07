/*
firstNotRepeatingCharacter

Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

Example

For s = "abacabad", the output should be
solution(s) = 'c'.

There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

For s = "abacabaabacaba", the output should be
solution(s) = '_'.

There are no characters in this string that do not repeat.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string s

A string that contains only lowercase English letters.

Guaranteed constraints:
1 ≤ s.length ≤ 105.

[output] char

The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/

function solution(s) {
  // create a uniqueLetts to hold letters
  const uniqueLetts = [];
  // create an array to hold letters that are out
  const outLetts = [];
  // loop through s
  for (let i = 0; i < s.length; i ++) {
    // if letter is not in out array
    if (outLetts.indexOf(s[i]) === -1) {
      // if letter is in uniqueLetts
      if (uniqueLetts.indexOf(s[i]) !== -1) {
        // remove from uniqueLetts
        let j = uniqueLetts.indexOf(s[i]);
        uniqueLetts.splice(j, 1);
        // put letter into out letters array
        outLetts.push(s[i]);
      } else {
        // push into uniqueLetts
        uniqueLetts.push(s[i]);
      }
    }
  }
  // if uniqueLetts.length
  if (uniqueLetts.length) {
    // return uniqueLetts[0]
    return uniqueLetts[0];        
  } else {
    return '_';        
  }
};
