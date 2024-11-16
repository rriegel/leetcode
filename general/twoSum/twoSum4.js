/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // create a dictionary of the nums
  const dict = {};
  for (let i = 0; i < nums.length; i ++) {
      let val = nums[i];
      dict[val] = i;
  }
  // loop through nums and subtract from target and check if difference is in dict
  for (let i = 0; i < nums.length; i ++) {
      let diff = target - nums[i];
      if (diff in dict) {
          if (dict[diff] !== i) {
              return [i,dict[diff]];
          }
      }
  }

  // big 0 notation
  // O(n) time
  // O(n) space
};