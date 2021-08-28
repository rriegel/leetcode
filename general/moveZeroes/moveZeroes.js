/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

function moveZeros(nums) {
  let front = 0;
  for (let i = 0; i < nums.length; i ++) {
    if (nums[i] !== 0) {
      if (i !== front) {
        [nums[front], nums[i]] = [nums[i], nums[front]];
      }
      front ++;
    }
  }
  return nums;
};

function test() {
  let result = JSON.stringify(moveZeros([0,1,0,3,12]));
  let expected = JSON.stringify([1,3,12,0,0]);
  console.log(result);
  console.log(result === expected);

  result = JSON.stringify(moveZeros([13,0,2,0,2,1,60,0,3,12]));
  expected = JSON.stringify([13,2,2,1,60,3,12,0,0,0]);
  console.log(result);
  console.log(result === expected);

  result = JSON.stringify(moveZeros([]));
  expected = JSON.stringify([]);
  console.log(result);
  console.log(result === expected);

  result = JSON.stringify(moveZeros([0]));
  expected = JSON.stringify([0]);
  console.log(result);
  console.log(result === expected);
};

test();