// const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');
// const lengthOfLongestSubstring = require('./lengthOfLongestSubstring2');
const lengthOfLongestSubstring = require('./lengthOfLongestSubstring3');

var test = () => {
  console.log(lengthOfLongestSubstring("abcabcbb")); //should be 3
  console.log(lengthOfLongestSubstring("bbbbb")); //should be 1
  console.log(lengthOfLongestSubstring("pwwkew")); //should be 3
  console.log(lengthOfLongestSubstring("")); //should be 0
};

test();