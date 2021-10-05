/*
Given a list of integers, return the bounds of the minimum range that must be sorted so that the whole list would be sorted.

Example:
Input: [1, 7, 9, 5, 7, 8, 10]
Output: (1, 5)
Explanation:
The numbers between index 1 and 5 are out of order and need to be sorted.
*/

/*
Solution:
1) Find the candidate unsorted subarray
  a) Scan from left to right and find the first element which is greater than the next element. Let s be the index of such an element.
  b) Scan from right to left and find the first element (first in right to left order) which is smaller than the next element (next in right to left order). Let e be the index of such an element.
2) Check whether sorting the candidate unsorted subarray makes the complete array sorted or not. If not, then include more elements in the subarray.
  a) Find the minimum and maximum values in arr[s..e]. Let minimum and maximum values be min and max. min and max for [30, 25, 40, 32, 31] are 25 and 40 respectively.
  b) Find the first element (if there is any) in arr[0..s-1] which is greater than min, change s to index of this element. There is no such element in above example 1.
  c) Find the last element (if there is any) in arr[e+1..n-1] which is smaller than max, change e to index of this element. In the above example 1, e is changed to 8 (index of 35)
3) Print s and e.
*/

// Optimized solution (greedy algorithm) - O(n) time || O(1) space
function minRangeToSort(nums) {
  const n = nums.length;
  let left = 0, right = n - 1, i, min, max;

  for (left = 0; left < n - 1; left ++) {
    if (nums[left] > nums[left + 1]) {
      break;
    }
  }

  if (left === n - 1) return null;

  for (right = n - 1; right > 0; right --) {
    if (nums[right] < nums[right - 1]) {
      break;
    }
  }

  max = nums[left], min = nums[left];
  for (i = left + 1; i <= right; i ++) {
    if (nums[i] > max) { max = nums[i]; }
    if (nums[i] < min) { min = nums[i]; }
  }
  for (i = 0; i < left; i ++) {
    if (nums[i] > min) {
      left = i;
      break;
    }
  }
  for (i = n - 1; i > right; i --) {
    if (nums[i] < max) {
      right = i;
      break;
    }
  }
  return [left, right];
};

function test() {
  console.log(minRangeToSort([1, 5, 7, 8, 9, 10])); // null
  console.log(minRangeToSort([1, 7, 9, 5, 7, 8, 10])); // [1, 5]
  console.log(minRangeToSort([1, 7, 9, 5, 7, 8, 4])); // [1, 6]
  console.log(minRangeToSort([10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60])); // [3, 8]
  console.log(minRangeToSort([0, 1, 15, 25, 6, 7, 30, 40, 50])); // [2, 5]
};

test();