/*
Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
Return the indices of the two numbers (1-indexed) as an integer array answer of size 2, where 1 <= answer[0] < answer[1] <= numbers.length.
The tests are generated such that there is exactly one solution. You may not use the same element twice.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]

*/

// return indices as 1-indexed (add 1 to each before returning)
// we will use a two-pointer approach here bc the array is sorted so we will be able to conditionally ++ or -- the pointers

// linear time O(n), constant space O(1)
function findSum(nums, target) {
  let left = 0, right = nums.length - 1, sum;
  while (left < right) {
    sum = nums[left] + nums[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum > target) right --;
    else left ++;
  }
};

function test() {
  console.log(findSum([2,7,11,15], 9));
  console.log(findSum([2,3,4], 6));
  console.log(findSum([-1,0], -1));
};

test();
