/*
You are given an array of integers. Find the maximum sum of all possible contiguous subarrays of the array.

Example:

[34, -50, 42, 14, -5, 86]

Given this input array, the output should be 137. The contiguous subarray with the largest sum is [42, 14, -5, 86].

Your solution should run in linear time.
*/

// sliding window approach - since we're looking at contiguous elements
  // keep track of start and end of window with idx vars
  // keep track of max sum with a maxSum var and a currSum var
  // loop with wEnd incrementing
    // take the max of the currSum plus the new number OR the new number
    // take the max of the current window and the max sum
  // return maxSum

function maxSubarray(nums) {
  let maxSum = nums[0], wSum = nums[0], wStart = 0;

  for (let wEnd = 1; wEnd < nums.length; wEnd ++) {
    wSum = Math.max(wSum+nums[wEnd], nums[wEnd])
    maxSum = Math.max(wSum, maxSum);
  }
  return maxSum;
};

function test() {
  console.log(maxSubarray([34, -50, 42, 14, -5, 86]) === 137);
  console.log(maxSubarray([1]) === 1);
};

test();