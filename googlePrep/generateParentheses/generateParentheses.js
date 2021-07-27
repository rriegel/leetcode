/**
 * @param {number} n
 * @return {string[]}
 */
// i: number indicating pairs of parens
// o: combinations of valid parens pairs
// c: 1 <= n <= 8
// e: if n is 0
// brute force approach
var generateParenthesis = function(n) {
  var res = [];
  // validate function
  const valid = (arr) => {
    var bal = 0;
    for (let i = 0; i < arr.length; i ++) {
      if (arr[i] === '(') {
        bal ++;
      } else {
        bal -= 1;
      }
      if (bal < 0) { return false };
    }
    return bal === 0;
  }
  // generate function
  const generate = (arr = []) => {
    if (arr.length === 2*n) {
      if (valid(arr)) {
        res.push(arr.join(""));
      }
    } else {
      arr.push('(');
      generate(arr);
      arr.pop();
      arr.push(')');
      generate(arr);
      arr.pop();
    }
  };
  generate();
  return res;
};

module.exports = generateParenthesis;