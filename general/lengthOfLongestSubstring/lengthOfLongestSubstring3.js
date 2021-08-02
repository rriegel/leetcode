/*
Given a string, find the length of the longest substring without repeating characters.
*/
/*
o: int
i: str
c: O(n) linear runtime
e: empty str
*/
// approach - sliding window: check if char exists in substring at each i, accumulate the string and take max to hold largest number
function longestSubstring(str) {
  let max = 0, currentStr = "";

  for (let i = 0; i < str.length; i ++) {

    let char = str.charAt(i);
    let pos = currentStr.indexOf(char);
    if (pos !== -1) {
      currentStr = currentStr.substr(pos + 1);
    }
    currentStr += char;
    max = Math.max(max, currentStr.length);
  }
  return max;
};

module.exports = longestSubstring;