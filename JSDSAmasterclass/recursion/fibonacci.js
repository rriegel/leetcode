function fib(n){
  if (n <= 2) return 1;
  return fib(n-2) + fib(n-1);
}

console.log(fib(4))
console.log(fib(5))
console.log(fib(10))