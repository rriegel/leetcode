/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Example 2:
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11
*/
// brute force approach - quadratic time complexity O(n^2)
function pairSum(arr, target) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = i; j < arr.length; j ++) {
      if (arr[i]+arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

function test() {
  console.log(JSON.stringify(pairSum([1, 2, 3, 4, 6], 6)) === JSON.stringify([1, 3]))
  console.log(JSON.stringify(pairSum([2, 5, 9, 11], 11)) === JSON.stringify([0, 2]))
};

test();