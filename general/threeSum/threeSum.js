/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);
  for (let left = 0; left < nums.length; left ++) {
    if (left === 0 || nums[left] !== nums[left-1]) {
      let target = 0 - nums[left];
      let mid = left + 1;
      let right = nums.length - 1;
      while (mid < right) {
        let sum = nums[mid] + nums[right];
        if (target === sum) {
          triplets.push([nums[left], nums[mid], nums[right]]);
          while (nums[mid] === nums[mid+1]) mid ++;
          while (nums[right] === nums[right-1]) right --;
          mid ++;
          right --;
        } else if (target < sum) {
          right --;
        } else {
          mid ++;
        }
      }
    }
  }
  return triplets;
};