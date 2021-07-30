/**
 * @param {number[]} nums
 * @return {number}
*/
// goal - linear time and constant space
// current approach - hashing - linear time and linear space
var singleNumber = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i ++) {
    map[nums[i]] = map[nums[i]]+1 || 1;
  }
  for (i in map) {
    if (map[i] === 1) {
      return i;
    }
  }
};