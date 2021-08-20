/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.



Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Example 3:
Input: nums = [1,1]
Output: 1

Example 4:
Input: nums = [1,1,2]
Output: 1
*/

var findDuplicate = function(nums) {
  let fast = 0, slow = 0;
  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) {
      let pointer = 0;
      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }
      return pointer;
    }
  }
};

function test() {
  console.log(findDuplicate([1,3,4,2,2]) === 2);
  console.log(findDuplicate([3,1,3,4,2]) === 3);
  console.log(findDuplicate([1,1]) === 1);
  console.log(findDuplicate([1,1,2]) === 1);
};

test();