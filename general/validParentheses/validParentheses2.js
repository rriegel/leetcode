/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
- Open brackets are closed by the same type of brackets.
- Open brackets are closed in the correct order.
- Note that an empty string is also considered valid.

Example:
Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False
*/
// approach - make map of parentheses, make stack to add the parentheses to, conditionally add or remove from the stack
// if stack doesn't align with current char in string OR if there are chars left in the stack return false
// else return true
function validate(str) {
  let parens = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  for (let i = 0; i < str.length; i ++) {
    let curr = str[i];
    if (curr === '(' || curr === '[' || curr === '{') {
      stack.push(curr);
    } else {
      if (curr === parens[stack[stack.length-1]]) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length ? false : true;
};

function test() {
  console.log(validate('((()))') === true);
  console.log(validate('[()]{}') === true);
  console.log(validate('({[)]') === false);
}

test();