/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let largest = 0;
  let obj = {};
  let firstLetter = 0;
  // as you loop through the string, store the letters in an object
  for (let i = 0; i < s.length; i ++) {
    // if the current letter already exists in the object
    if (obj[s[i]]) {
      let newLength = Object.keys(obj).length;
      // IF it is larger than the value of largest
      if (newLength > largest) {
        // store the number of keys as largest
        largest = newLength;
      }
      // reset the obj
      firstLetter += 1;
      i = firstLetter;
      obj = {};
      obj = {[s[i]]: i};
    // otherwise
    } else {
      // keep track of current letter in obj
      obj[s[i]] = i;
    }
  }
  // there is a more efficient solution
  let finalLength = Object.keys(obj).length;
  return Math.max(finalLength, largest);
};

export default lengthOfLongestSubstring;