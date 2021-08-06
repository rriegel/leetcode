/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = (s) => {
  var parens = {
      ")": "(",
      "}": "{",
      "]": "["
  };
  let stack = [];
  for (var i = 0; i < s.length; i ++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
          stack.push(s[i]);
      } else if (stack[stack.length-1] === parens[s[i]]) {
          stack.pop();
      } else {
          return false;
      }
  }
  return stack.length !== 0 ? false : true;
};

module.exports = isValid;