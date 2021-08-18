/*
Given a mathematical expression with just single digits, plus signs, negative signs, and brackets, evaluate the expression. Assume the expression is properly formed.

Example:
Input: '- ( 3 + ( 2 - 1 ) )'
Output: -4
Here's the function signature:

def eval(expression):
  # Fill this in.

print eval('- (3 + ( 2 - 1 ) )')
# -4
*/

function calculator(expression) {
  let len = expression.length;
  if (len === 0) return 0;

  let stack = [];
  let res = 0;
  let sign = 1;
  expression.replace(' ', '');

  for (let i = 0; i < len; i ++) {
    let n = expression[i];
    if (!isNaN(parseInt(n))) {
      let curr = parseInt(n);
      while (i + 1 < len && !isNaN(parseInt(expression[i + 1]))) {
        curr = curr * 10 + parseInt(expression[i + 1]);
        i ++;
      }
      res += curr * sign;
    } else if (n === '-') {
      sign = -1;
    } else if (n === '+') {
      sign = 1;
    } else if (n === '(') {
      stack.push(res);
      res = 0;
      stack.push(sign);
      sign = 1;
    } else if (n === ')') {
      res = res * stack.pop() + stack.pop();
    }
  }

  return res;
};

function test() {
  console.log(calculator('- ( 3 + ( 2 - 1 ) )') === -4);
  console.log(calculator('-(3+(2-1))') === -4);
};

test();