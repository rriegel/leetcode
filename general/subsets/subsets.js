/*
Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

var subsets = function(nums) {
  const result = [];
  const dfs = (i, slate) => {
    // base case
    if (i === nums.length) {
      // push a copy of the slate into the result so that you can resuse it through the traversal
      result.push([...slate]);
      return;
    }
    // dfs recursive case

    // exclude case
    dfs(i+1, slate);

    // include case
    slate.push(nums[i]);
    dfs(i+1, slate);
    slate.pop();
  };

  dfs(0, []);
  return result;
};