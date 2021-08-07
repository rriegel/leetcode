/*
Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]
*/

// dutch flag sort - two pointers on high and low indices and then increment with i through the array and replace values as you increment - linear time O(n)
function sortThree(nums) {
  let low = 0, high = nums.length-1, i = 0;
  while (i <= high) {
    if (nums[i] === 1) {
      [nums[low], nums[i]] = [nums[i], nums[low]];
      i ++;
      low ++;
    } else if (nums[i] === 3) {
      [nums[high], nums[i]] = [nums[i], nums[high]];
      high --;
    } else {
      i ++;
    }
  }
  return nums;
};

function test() {
  let actual = JSON.stringify(sortThree([3, 3, 2, 1, 3, 2, 1]));
  let expected = JSON.stringify([1, 1, 2, 2, 3, 3, 3]);
  console.log(actual === expected);
}

test();