/**
 * @param {string} digits
 * @return {string[]}
 */
// input: string of digits
// output: is an array of combinations of mapped letters that represent the digits
// constraints: 4 digs max, 2-9 range is specified
// edge cases: 1 and 0 don't map, input must be numeric, empty string returns empty []

// algorithm: BFS --> line 30-31

var phoneMap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

var letterCombinations = function(digits) {
  let ans = [], len = digits.length;
  if (!len) { return [] };
  var bfs = (pos, str) => {
    if (pos === len) {ans.push(str)}
    else {
      let letters = phoneMap[digits[pos]];
      for (let i = 0; i < letters.length; i ++) {
        bfs(pos+1, str + letters[i]);
      }
    };
  };
  bfs(0, "");
  return ans;
};

module.exports = letterCombinations;