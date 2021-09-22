/*
You are given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid. "Valid" means that each open parenthesis has a matching closed parenthesis.

Example:

"()())()"

The following input should return 1.

")("

*/

// use a stack to track opening and closing parens
// if it's open - add it to stack
// if it's closed
  // if stack has parens in it
    // pop last one off
  // otherwise
    // this is a misplaced closing parens so increment remove
function countInvalidParenthesis(str) {
  let remove = 0;
  const stack = [];

  for (let i = 0; i < str.length; i ++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (!stack.length) {
        remove ++;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length) {
    remove += stack.length;
  }
  return remove;
};

function test() {

  let parens = "()()()";
  console.log(countInvalidParenthesis(parens) === 0);

  parens = "()())()";
  console.log(countInvalidParenthesis(parens) === 1);

  parens = ")(";
  console.log(countInvalidParenthesis(parens) === 2);

  parens = "()))";
  console.log(countInvalidParenthesis(parens) === 2);

  parens = ")()(";
  console.log(countInvalidParenthesis(parens) === 2);

  parens = "()((";
  console.log(countInvalidParenthesis(parens) === 2);
};

test();