// import lengthOfLongestSubstring from './lengthOfLongestSubstring.js'
import lengthOfLongestSubstring from './lengthOfLongestSubstring2.js'

var test = () => {
  console.log(lengthOfLongestSubstring("abcabcbb")); //should be 3
  console.log(lengthOfLongestSubstring("bbbbb")); //should be 1
  console.log(lengthOfLongestSubstring("pwwkew")); //should be 3
  console.log(lengthOfLongestSubstring("")); //should be 0
};

test();