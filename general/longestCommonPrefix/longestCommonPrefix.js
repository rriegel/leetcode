/*
@param {string[]} strs
@return {string}
*/

 var longestCommonPrefix = function(strs) {
  //set prefix to first word (split into array)
  var prefix = strs[0].split('');
  // loop through second word and check each letter to see if it matches the prefix
  for (var i = 1; i < strs.length; i ++) {
      var curr = strs[i].split('');
      var temp = [];
      for (var j = 0; j < curr.length; j ++) {
          // add the matching letters to new prefix
          if (curr[j] === prefix[j]) {
              temp.push(curr[j]);
          // cut off loop once letters no longer match
          } else {
              break;
          }
      }
      prefix = temp;
  }
  return prefix.join('');
};

export default longestCommonPrefix;