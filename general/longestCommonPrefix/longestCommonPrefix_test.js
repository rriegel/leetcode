import longestCommonPrefix from './longestCommonPrefix.js'

var test = () => {
  var strs = ["flower", "flow", "flight"];
  console.log(longestCommonPrefix(strs)) //should return "fl"

  var strs = ["look", "loop", "loose"];
  console.log(longestCommonPrefix(strs)) //should return "loo"
};

test();