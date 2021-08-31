/*
You are given an array of integers. Return the largest product that can be made by multiplying any 3 integers in the array.

Example:

[-4, -4, 2, 8] should return 128 as the largest product can be made by multiplying -4 * -4 * 8 = 128.

Here's a starting point:

def maximum_product_of_three(lst):
  # Fill this in.

print maximum_product_of_three([-4, -4, 2, 8])
# 128
*/
// input is an array of numbers (neg and pos)
// output is largest product of 3 nums in the array
// constraints
// edge cases - n/a

function largestProduct(nums) {
  nums = nums.sort((a,b) => a-b);
  return Math.max(nums[nums.length-1]*nums[nums.length-2]*nums[nums.length-3], nums[0]*nums[1]*nums[nums.length-1]);
};

function test() {
  console.log(largestProduct([-4, -4, 2, 8]) === 128)
};

test();