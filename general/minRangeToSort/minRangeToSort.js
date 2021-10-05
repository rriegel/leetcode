/*
Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.

Example:
Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)
Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.
*/

/*
keep track of left and right boundaries of needing sorted - initialized at nums.length-1 and 0, respectively
  start a nested loop with j being i + 1
    if the nums[i] < nums[j]
      set the left and right values to the min and max of the corresponding pointer and its current value
return left and right in an array
*/

// brute force - O(n^2) time || O(1) space
function minRangeToSort(nums) {
  let left = nums.length - 1, right = 0;

  for (let i = 0; i < nums.length; i ++) {
    for (let j = i + 1; j < nums.length; j ++) {
      if (nums[j] < nums[i]) {
        left = Math.min(i, left);
        right = Math.max(j, right);
      }
    }
  }

  return [left, right];
};

function test() {
  console.log(minRangeToSort([1, 7, 9, 5, 7, 8, 10])); // [1, 5]
  console.log(minRangeToSort([1, 7, 9, 5, 7, 8, 4])); // [1, 6]
  console.log(minRangeToSort([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60])); // [3, 8]
  console.log(minRangeToSort([0, 1, 15, 25, 6, 7, 30, 40, 50])); // [2, 5]
};

test();