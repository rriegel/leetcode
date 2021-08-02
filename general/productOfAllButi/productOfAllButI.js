const {performance} = require('perf_hooks');

/*
Given an array of integers, return a new array such that each element at index i of the new array
is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/
// input - arr of ints
// output - new arr of products
// constraints - N/A (what if you can't use division)
// edge cases - empty array, array of 1

// approaches - brute force O(n^2) | division O(n)
function product(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i ++) {
    product *= arr[i];
  }
  let prodArr = [];
  for (let i = 0; i < arr.length; i ++) {
    prodArr.push(product/arr[i]);
  }
  return prodArr;
};

function test() {
  console.log(product([1, 2, 3, 4, 5]));
  console.log(product([3, 2, 1]));

  let t1 = performance.now();
  product([1, 2, 3, 4, 5]);
  let t2 = performance.now();
  console.log(`Elapsed time of function: ${(t2-t1)/1000} s`)
};

test();