/*
Given a string with only ( and ), find the minimum number of characters to add or subtract to fix the string such that the brackets are balanced.

Example:
Input: '(()()'
Output: 1
*/

function fixBrackets(str) {
  const stack = [];
  let count = 0;
  for (let char of str) {
    if (char === '(') {
      stack.push(char);
    } else if (!stack.length) {
      count ++;
    } else {
      stack.pop();
    }
  };
  count += stack.length;
  return count;
};

function test() {
  console.log(fixBrackets('(()())') === 0);
  console.log(fixBrackets('(()()') === 1);
  console.log(fixBrackets('(()(()') === 2);
  console.log(fixBrackets('(()()))') === 1);
};

test();