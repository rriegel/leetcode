/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let max = 0, currentString = "", i, char, pos;

  for (i = 0; i < s.length; i ++) {
    char = s.charAt(i);
    // pos will be -1 UNLESS it already exists in the currentString
    pos = currentString.indexOf(char);
    // if the char is already in the currentString
    if (pos !== -1) {
      // cut "dv" to "v" when you see another "d"
      currentString = currentString.substr(pos + 1);
    }
    currentString += char;
    max = Math.max(max, currentString.length);
  }
  return max;
};

export default lengthOfLongestSubstring;