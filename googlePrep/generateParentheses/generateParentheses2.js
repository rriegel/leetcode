/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = [];
  var backtrack = (arr = [], left = 0, right = 0) => {
      if (arr.length === 2*n) {
          ans.push(arr.join(""));
          return;
      }
      if (left < n) {
          arr.push("(");
          backtrack(arr, left+1, right);
          arr.pop();
      }
      if (right < left) {
          arr.push(")");
          backtrack(arr, left, right+1);
          arr.pop();
      }
  }
  backtrack()
  return ans
};

module.exports = generateParenthesis;