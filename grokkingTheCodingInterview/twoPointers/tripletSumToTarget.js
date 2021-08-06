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
  let newTripletSum;
  let resultDiff;
  for (let left = 0; left < nums.length - 2; left ++) {
    let mid = left+1;
    let right = nums.length-1;
    newTripletSum = nums[left]+nums[mid]+nums[right];
    let currAbsDiff = Math.abs(newTripletSum-target);
    let currDiff = newTripletSum-target;
    if (resultDiff === undefined || currAbsDiff < Math.abs(resultDiff) || (currAbsDiff === Math.abs(resultDiff) && currDiff < resultDiff)) {
      resultDiff = currDiff;
      while (nums[mid] === nums[mid+1]) mid ++;
      while (nums[right] === nums[right-1]) right --;
      mid ++;
      right --;
    } else if (currDiff > resultDiff) {
      right --;
    } else {
      mid ++
    }
  }
  let result = target-Math.abs(resultDiff);
  console.log(result)
  return result;
};

function test() {
  console.log(tripletTargetSum([-2, 0, 1, 2], 2) === 1);
  console.log(tripletTargetSum([-3, -1, 1, 2], 1) === 0);
  console.log(tripletTargetSum([1, 0, 1, 1], 100) === 3);
};

test();