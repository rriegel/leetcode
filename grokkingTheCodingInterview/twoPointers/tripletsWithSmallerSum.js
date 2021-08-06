/*
Triplets with Smaller Sum (medium)

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:
Input: [-1, 0, 2, 3], target=3
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]

Example 2:
Input: [-1, 4, 2, 1, 3], target=5
Output: 4
Explanation: There are four triplets whose sum is less than the target:
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

// two pointer solution
function smallerSumTriplets(nums, target) {
  nums = nums.sort((a,b) => a-b);
  let count = 0;
  for (let left = 0; left < nums.length-2; left ++) {
    let mid = left+1;
    let right = nums.length-1;
    while (mid < right) {
      let currSum = nums[left] + nums[mid] + nums[right];
      if (currSum < target) {
        // instead of incrementing the count once, increment it by right - mid
        // because all sums in between will be smaller than the current one
        // meaning they satisfy the condition
        count += right - mid;
        mid ++;
      } else right --;
    }
  }
  return count;
};

function test() {
  debugger;
  console.log(smallerSumTriplets([-1, 0, 2, 3], 3) === 2);
  console.log(smallerSumTriplets([-1, 4, 2, 1, 3], 5) === 4);
  console.log(smallerSumTriplets([-1, 0, 2, 3, 6, 8, 1, 1], 6) === 19);
};

test();