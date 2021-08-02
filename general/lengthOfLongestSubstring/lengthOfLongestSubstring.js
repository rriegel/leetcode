/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let largest = 0, obj = {}, firstLett = 0;

  for (let i = 0; i < s.length; i ++) {
    if (obj[s[i]]) {
      let newLength = Object.keys(obj).length;
      if (newLength > largest) {
        largest = newLength;
      }
      firstLett += 1;
      i = firstLett;
      obj = {[s[i]]: i};
    } else {
      obj[s[i]] = i;
    }
  }
  // there is a more efficient solution
  let finalLength = Object.keys(obj).length;
  return Math.max(finalLength, largest);
};

module.exports = lengthOfLongestSubstring;