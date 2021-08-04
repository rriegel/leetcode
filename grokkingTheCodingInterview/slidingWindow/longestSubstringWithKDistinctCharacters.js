/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:
Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:
Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

function longestSubstringWithKDistinct(s, k) {
  let wStart = 0, map = {}, maxLength = 0;

  for (let wEnd = 0; wEnd < s.length; wEnd ++) {
    let newChar = s.charAt(wEnd);
    map[newChar] = map[newChar] + 1 || 1;
    while (Object.keys(map).length > k) {
      let firstChar = s[wStart];
      map[firstChar] -= 1;
      if (map[firstChar] === 0) {
        delete map[firstChar];
      }
      wStart ++;
    }
    maxLength = Math.max(maxLength, wEnd - wStart + 1);
  }
  return maxLength;
};

function test() {
  let s = "araaci", k = 2;
  console.log(longestSubstringWithKDistinct(s, k) === 4);
  s = "araaci";
  k = 1;
  console.log(longestSubstringWithKDistinct(s, k) === 2);
  s = "cbbebi";
  k = 3;
  console.log(longestSubstringWithKDistinct(s, k) === 5);
};

test();