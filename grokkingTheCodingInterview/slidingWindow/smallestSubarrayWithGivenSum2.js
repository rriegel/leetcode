/*
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:
Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:
Input: [3, 4, 1, 1, 6], S=8
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

// sliding window approach
function smallestSubarrayWithSum (arr, sum) {
  let wSum = 0;
  let minLength = Infinity;
  let wStart = 0;

  for (let wEnd = 0; wEnd < arr.length; wEnd ++) {
    wSum += arr[wEnd]; // add next element
    // shrink the windoe as small as possible until the wSum is smaller than sum;
    while (wSum >= sum) {
      minLength = Math.min(minLength, wEnd-wStart + 1);
      wSum -= arr[wStart];
      wStart ++;
    }
  }
  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
};

function test() {
  console.log(smallestSubarrayWithSum([2, 1, 5, 2, 3, 2], 7) === 2)
  console.log(smallestSubarrayWithSum([2, 1, 5, 2, 8], 7) === 1)
  console.log(smallestSubarrayWithSum([3, 4, 1, 1, 6], 8) === 3)
};

test()