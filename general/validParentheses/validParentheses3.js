/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // create a stack
  const stack = [];
  // loop through s
  for (let char of s) {
      // add open chars to the stack and use close chars to pop off the stack
      let open = char === "(" || char === "{" || char === "[";
      if (open) {
          stack.push(char);
      } else {
          let lastInStack = stack[stack.length - 1];
          let valid = (char === ")" && lastInStack === "(")
                   || (char === "}" && lastInStack === "{")
                   || (char === "]" && lastInStack === "[");

          if (valid) {
              stack.pop();
          } else {
              return false;
          }
      }
      // if chars dont match when closing, return false
  }
  // return false if stack isnt empty
  if (stack.length !== 0) return false;
  // return true
  return true;

  // big O notation
  // O(n) space
  // O(n) time

};