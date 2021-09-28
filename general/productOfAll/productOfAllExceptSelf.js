/*
You are given an array of integers. Return an array of the same size where the element at each index is the product of all the elements in the original array except for the element at that index.

For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

You cannot use division in this problem.
*/

function productExceptSelf(nums) {
  const newArr = [];
  let mult = 1;
  for (let i = 0; i < nums.length; i ++) {
    newArr[i] = mult;
    mult *= nums[i];
  }
  mult = 1;
  for (let i = nums.length-1; i >= 0; i --) {
    newArr[i] *= mult;
    mult *= nums[i];
  }
  return newArr;
};

function test() {
  console.log(productExceptSelf([1, 2, 3, 4, 5]));
  console.log(productExceptSelf([3, 2, 1]));
};

test();