/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library’s sort function for this problem.

Can you do this in a single pass?

Example:
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Here's a starting point:

class Solution:
  def sortColors(self, nums):
    # Fill this in.

nums = [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]
print("Before Sort: ")
print(nums)
# [0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]

Solution().sortColors(nums)
print("After Sort: ")
print(nums)
# [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2]
*/
// two pointer solution
  // keep track of the left and right idxs of the array
  // loop through the array with another pointer
    // if the current number is a 0
      // swap elements at the left and current positions
      // left pointer increment
      // current pointer will increment
    // if the current number is a 2
      // swap right and current
      // decrement the right pointer
    // else
      // increment current
  // return the array
function sortThree(nums) {
  let left = 0, right = nums.length-1;
  let curr = 0;
  while (curr <= right) {
    if (nums[curr] === 0) {
      [nums[curr], nums[left]] = [nums[left], nums[curr]];
      left ++;
      curr ++;
    } else if (nums[curr] === 2) {
      [nums[curr], nums[right]] = [nums[right], nums[curr]];
      right --;
    } else {
      curr ++;
    }
  }
  return nums;
};

function test() {
  console.log(sortThree([2,0,2,1,1,0]));
  console.log(sortThree([0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1]));
};

test();