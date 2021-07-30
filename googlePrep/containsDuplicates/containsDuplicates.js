/**
 * @param {number[]} nums
 * @return {boolean}
*/
// can be optimized
var containsDuplicate = function(nums) {
  let map = [], n = nums.length;
  for (let i = 0; i < n; i ++) {
      if (!map[nums[i]]) {map[nums[i]] = 1}
      else { return true }
  }
  return false;
};