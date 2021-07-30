/**
 * @param {number[]} nums
 * @return {number}
*/
// find subarray that contains the largest sum and return the sum
// nums is an array of positive and negative ints
// constraints - nums.length and num value
// edge cases - if num.length === 1, return that value
// approach - accumulator to hold max
function maxSubArray(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let acc = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i ++) {
    prev = Math.max(nums[i], nums[i] + prev);
    acc = Math.max(acc, prev);
  };
  return acc;

};

module.exports = maxSubArray;