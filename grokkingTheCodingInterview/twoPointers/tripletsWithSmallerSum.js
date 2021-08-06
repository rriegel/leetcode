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

function smallerSumTriplets(nums, target) {
  nums = nums.sort((a,b) => a-b);
  let tripletSums = 0;
  for (let left = 0; left < nums.length-2; left ++) {
    if (left === 0 || arr[left] !== arr[left-1]) {
      let mid = left+1;
      let right = nums.length-1;
      while (mid < right) {
        let currSum = arr[left] + arr[mid] + arr[right];
        if (currSum < target) {
          tripletSums ++;
          while (arr[mid] === arr[mid+1]) mid ++;
          while (arr[right] === arr[right-1]) right --;
        }
        if (currSum > target) {
          right --;
        } else {
          mid ++;
        }
      }
    }
  }
  return tripletSums;
};

function test() {
  console.log(smallerSumTriplets([-1, 0, 2, 3], 3) === 2);
  console.log(smallerSumTriplets([-1, 4, 2, 1, 3], 5) === 4);
};

test();