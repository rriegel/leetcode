/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

// two pointer doesn't work in this case because two pointer needs sorting and that would change the indices of the nums, so using a map to link the num to its i and then using a one pointer loop to calculate the difference and return the indices base on that is better and linear time - O(n)
var twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i ++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i ++) {
    let diff = target - nums[i];
    if (map[diff] && map[diff] !== i) {
      return [i, map[diff]];
    }
  }
};

module.exports = twoSum;