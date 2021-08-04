/*
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example 1:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

Example 2:
Input: String="abbcb", k=1
Output: 4
Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".

Example 3:
Input: String="abccde", k=1
Output: 3
Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/

function longestAfterReplacement(s, k) {
  let wStart = 0;
  let maxLength = 1;
  let maxRepeats = 0;
  let charMap = {};
  for (let wEnd = 1; wEnd < s.length; wEnd ++) {
    let currentChar = s[wEnd];
    charMap[currentChar] = charMap[currentChar] + 1 || 1;
    maxRepeats = Math.max(maxRepeats, charMap[currentChar]);

    while ((wEnd - wStart + 1 - maxRepeats) > k) {
      let firstChar = s[wStart];
      charMap[firstChar] --;
      wStart ++;
    }
    maxLength = Math.max(maxLength, wEnd - wStart + 1);
  }
  return maxLength;
};

function test() {
  console.log(longestAfterReplacement('aabccbb', 2) === 5);
  console.log(longestAfterReplacement('abbcb', 1) === 4);
  console.log(longestAfterReplacement('abccde', 1) === 3);
};

test();