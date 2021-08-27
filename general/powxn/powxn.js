/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
*/

// this is a divide and conquer solution
// the n value is broken down into a base case using recursion
// time complexity is O(log n)
// space complexity is O(log n)
var myPow = function(x, n) {
  if (n < 0) {
    n = Math.abs(n);
    x = 1/x;
  }
  const recur = (x, n) => {
    if (n === 0) return 1;
    if (n === 1) return x;
    let tmp = recur(x, Math.floor(n/2));
    return (n % 2 === 1) ? (tmp * tmp * x) : (tmp * tmp);
  };
  return recur(x, n);
};