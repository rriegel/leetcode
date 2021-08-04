/*
Given a string, find the length of the longest substring which has no repeating characters.

Example 1:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

Example 2:
Input: String="abbbb"
Output: 2
Explanation: The longest substring without any repeating characters is "ab".

Example 3:
Input: String="abccde"
Output: 3
Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

function longestNonrepeatSubstring(s) {
  let charMap = {};
  let wStart = 0;
  let maxLength = 0;
  for (let wEnd = 0; wEnd < s.length; wEnd ++) {
    let currentChar = s[wEnd];
    charMap[currentChar] = charMap[currentChar] + 1 || 1;

    while (Object.keys(charMap).length < (wEnd-wStart+1)) {
      let firstChar = s[wStart];
      if (charMap[firstChar] === 1) {
        delete charMap[firstChar];
      } else {
        charMap[firstChar] --;
      }
      wStart ++;
    }

    maxLength = Math.max(maxLength, wEnd-wStart+1)
  }
  return maxLength;
};

function test() {
  let s = 'aabccbb';
  console.log(longestNonrepeatSubstring(s) === 3);
  s = 'abbbb';
  console.log(longestNonrepeatSubstring(s) === 2);
  s = 'abccde';
  console.log(longestNonrepeatSubstring(s) === 3);
};

test();