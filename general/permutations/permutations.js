/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]


Constraints:

1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// time - O(n!*n)
// space
// use backtracking method to cycle through combinations
var permute = function(nums) {
  const result = [];

  const dfs = (i) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
    }
    for (let j = i; j < nums.length; j ++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i+1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0);

  return result;
};