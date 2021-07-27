/**
 * @param {string} s
 * @return {boolean}
 */
// input: a string s that contains only parens
// output is a boolean
// constraints: length and characters included
// edge cases: if input s is empty

// Approach: Stack data structure

var isValid = function(s) {
  let stack = [];
  let parens = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  for (let i = 0; i < s.length; i ++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      if (stack[stack.length-1] === parens[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length ? false : true;
};