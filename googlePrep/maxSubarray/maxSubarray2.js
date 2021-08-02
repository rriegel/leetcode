/**
 * @param {number[]} nums
 * @return {number}
*/
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
*/
// given an array of positive and negative values
// cannot sort
// return largest sum of contiguous subarray of array
// edge cases: array length of 0 or 1
// sliding window
function maxSubArray(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  let i = 0, j = 1;
  let finalSum = nums[i];
  let newSum = nums[i];
  while (j < nums.length) {
    newSum = Math.max(nums[j], newSum + nums[j]);
    finalSum = Math.max(finalSum, newSum);
    j ++;
  }
  return finalSum;
};

module.exports = maxSubArray;