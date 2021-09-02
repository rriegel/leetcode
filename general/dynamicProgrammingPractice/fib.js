// memoization
  // we'll use a js object, keys will be arguments to the function, value will be the return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// makes the function really slow without memoization
console.log(fib(50));