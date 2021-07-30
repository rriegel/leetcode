// iterative factorial function implementation
const {performance} = require('perf_hooks');

function factorial (num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
};

console.log('factorial of 4: ', factorial(4));
console.log('factorial of 5: ', factorial(5));

let t1 = performance.now();
factorial(10);
let t2 = performance.now();
console.log(`Time Elapsed: ${t2 - t1} ms`);