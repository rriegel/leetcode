/*
Triplet Sum Close to Target (medium)

Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:
Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

Example 2:
Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.

Example 3:
Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

// iterative and two pointer approach
// will need to keep track of closest sum to target

// edge case: if target = 1 and theres a sum that = 2 and a sum = 0, return 0
function tripletTargetSum(nums, target) {
  nums = nums.sort((a,b) => a-b);
  let diff = Infinity;
  for (let left = 0; left < nums.length - 2; left ++) {
    let mid = left+1;
    let right = nums.length-1;
    while (mid < right) {
      let newSum = nums[left] + nums[mid] + nums[right];
      let newDiff = target - newSum;
      if (newDiff === 0) {
        return target;
      }
      if (Math.abs(newDiff) < Math.abs(diff) || (Math.abs(newDiff) === Math.abs(diff) && newDiff > diff)) {
        diff = newDiff;
      }
      if (newDiff > 0) {
        mid ++;
      } else {
        right --;
      }
    }
  }
  return target - diff;
};

function test() {
  console.log(tripletTargetSum([-2, 0, 1, 2], 2) === 1);
  console.log(tripletTargetSum([-3, -1, 1, 2], 1) === 0);
  console.log(tripletTargetSum([1, 0, 1, 1], 100) === 3);
};

test();