/*
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:
Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:
Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].
*/
// sliding window solution
function maxSubarraySum(arr, k) {
  let wStart = 0, wSum = 0, maxSum = 0;

  for (let wEnd = 1; wEnd < arr.length; wEnd ++) {
    wSum += arr[wEnd];
    if (wEnd >= k-1) {
      maxSum = Math.max(maxSum, wSum);
      wSum -= arr[wStart];
      wStart ++;
    }
  }
  return maxSum;
}

function test() {
  console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3) === 9);
  console.log(maxSubarraySum([2, 3, 4, 1, 5], 2) === 7);
};

test();
