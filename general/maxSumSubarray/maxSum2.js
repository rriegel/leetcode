/*
Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.
*/

// sliding window
// keep track of maxSum, currSum
// loop thru elements
  // if the curr element is greater than the maxSum
    //
function maxSum(nums) {
  if (nums.length < 2) return nums[0] > 0 ? nums[0] : 0;
  let maxSum = 0;
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

function test() {
  console.log(maxSum([34, -50, 42, 14, -5, 86]) === 137);
  console.log(maxSum([-5, -1, -8, -9]) === 0);
  console.log(maxSum([1]) === 1);
  console.log(maxSum([]) === 0);
};

test();