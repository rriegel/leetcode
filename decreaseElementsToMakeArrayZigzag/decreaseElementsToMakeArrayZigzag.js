/*
Given an array nums of integers, a move consists of choosing any element and decreasing it by 1.

An array A is a zigzag array if either:

Every even-indexed element is greater than adjacent elements, ie. A[0] > A[1] < A[2] > A[3] < A[4] > ...
OR, every odd-indexed element is greater than adjacent elements, ie. A[0] < A[1] > A[2] < A[3] > A[4] < ...
Return the minimum number of moves to transform the given array nums into a zigzag array.



Example 1:

Input: nums = [1,2,3]
Output: 2
Explanation: We can decrease 2 to 0 or 3 to 1.
Example 2:

Input: nums = [9,6,1,6,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
*/



var ziggify = (nums, styleAdj, start) => {
  let a = [...nums];

  // loop through copy of nums - a - and check every other el based on start val
  for (let i = start; i < nums.length; i += 2) {
      if (a[i] >= a[i - 1]) {
          styleAdj += a[i] - a[i - 1] + 1;
          a[i] = a[i - 1] - 1;
      }
      if (a[i] >= a[i + 1]) {
          styleAdj += a[i] - a[i + 1] + 1;
          a[i] = a[i + 1] - 1;
      }
  }
  return styleAdj;
};

var movesToMakeZigzag = (nums) => {
  // find number of adjustments needed to make the zigzag pattern from both even and odd positions
  let even = ziggify(nums, 0, 0);
  let odd = ziggify(nums, 0, 1);
  return Math.min(even, odd);
};

export default movesToMakeZigzag;