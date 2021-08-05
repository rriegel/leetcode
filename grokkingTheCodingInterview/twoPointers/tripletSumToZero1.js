/*
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

Example 1:
Input: [-3, 0, 1, 2, -1, 1, -2]
Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
Explanation: There are four unique triplets whose sum is equal to zero.

Example 2:
Input: [-5, 2, -1, -2, 3]
Output: [[-5, 2, 3], [-2, -1, 3]]
Explanation: There are two unique triplets whose sum is equal to zero.
*/

function tripletZeroSum(arr) {
  arr = arr.sort((a, b) => a - b)
  const n = arr.length
  let triplets = [];
  let left = 0, right = n - 1;
  let mid = left+1;
  while (left < right) {
    let leftVal = arr[left];
    let midVal = arr[mid];
    let rightVal = arr[right];
    let equation = Math.abs(midVal+rightVal) - Math.abs(leftVal);

    if (equation < 0) {
      mid ++;
    } else {
      right --;
    }

    if (equation === 0) {
      triplets.push([leftVal, midVal, rightVal]);
      left++;
      mid = left+1;
      right = n - 1;
    }

  }
  return triplets;
};

function test() {
  console.log(JSON.stringify(tripletZeroSum([-3, 0, 1, 2, -1, 1, -2])) === JSON.stringify([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]));
  console.log(JSON.stringify(tripletZeroSum([-5, 2, -1, -2, 3])) === JSON.stringify([[-5, 2, 3], [-2, -1, 3]]));
  console.log(tripletZeroSum([-3, 0, 1, 2, -1, 1, -2]));
  console.log(tripletZeroSum([-5, 2, -1, -2, 3]));
};

test();