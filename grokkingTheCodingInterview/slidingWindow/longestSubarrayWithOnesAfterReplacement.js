/*
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

Example 2:
Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.
*/

function longestSubarrayAfterReplacement(arr, k) {
  let wStart = 0;
  let maxReplacements = 0;
  let maxLength = 0;

  for (let wEnd = 0; wEnd < arr.length; wEnd ++) {
    let currEl = arr[wEnd];
    if (currEl === 0) {
      maxReplacements ++;
    }
    while (maxReplacements > k) {
      let firstNum = arr[wStart];
      if (firstNum === 0) {
        maxReplacements --;
      }
      wStart ++;
    }
    maxLength = Math.max(maxLength, wEnd - wStart + 1);
  }
  return maxLength;
};

function test() {
  let arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k = 2;
  console.log(longestSubarrayAfterReplacement(arr, k) === 6);
  arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k = 3;
  console.log(longestSubarrayAfterReplacement(arr, k) === 9);
};

test();