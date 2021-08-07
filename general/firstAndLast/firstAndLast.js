/*
Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

Example:
Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]
*/

// the array is sorted so two-pointer approach will be perfect for this - linear time O(n)
function firstAndLast(arr, target) {
  let left=0, right=arr.length-1;
  let indices = [];
  while (left < right) {
    if (arr[left] === target) {
      indices[0] = left;
      if (indices[1]) {
        return indices;
      }
    }
    if (arr[right] === target) {
      indices[1] = right;
      if (indices[0]) {
        return indices;
      }
    }
    if (indices[0] === undefined) {
      left ++;
    }
    if (indices[1] === undefined) {
      right --;
    }
  }
  return [-1, -1];
};

function test() {
  let actual = JSON.stringify(firstAndLast([1,3,3,5,7,8,9,9,9,15], 9));
  let expected = JSON.stringify([6,8]);
  console.log(actual === expected);

  actual = JSON.stringify(firstAndLast([100, 150, 150, 153], 150));
  expected = JSON.stringify([1,2]);
  console.log(actual === expected);

  actual = JSON.stringify(firstAndLast([1,2,3,4,5,6,10], 9));
  expected = JSON.stringify([-1,-1]);
  console.log(actual === expected);
};

test();