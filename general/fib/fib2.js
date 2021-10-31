/*
The Fibonacci sequence is the integer sequence defined by the recurrence relation: F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1. In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers. Below are the first few values of the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number.
Examples:
Input: n = 3
Output: 2

Input: n = 7
Output: 13
*/

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n < 3) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

function test() {
  console.log(fib(3) === 2);
  console.log(fib(7) === 13);
  console.log(fib(57) === 365435296162);
};

test();