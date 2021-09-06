/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]


Constraints:
1 <= n <= 8
*/

var generateParenthesis = function(n) {
  const result = [];

  const backtrack = (left, right, slate) => {
    // base case
    if (slate.length === 2*n) {
      result.push(slate.join(''));
      return;
    }
    // recursive case
    // left
    if (left < n) {
      slate.push('(');
      backtrack(left+1, right, slate);
      slate.pop();
    }
    // right
    if (right < left) {
      slate.push(')');
      backtrack(left, right+1, slate);
      slate.pop();
    }
  };

  backtrack(0, 0, []);

  return result;
};