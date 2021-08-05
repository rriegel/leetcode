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
  const triplets = [];

  for (let i = 0; i < arr.length; i ++) {
    if (i > 0 && arr[i] === arr[i-1]) { // skip same element to avoid duplicate triplets
      continue;
    }
    searchPair(arr, -arr[i], i+1, triplets);
  }

  return triplets;
};

function searchPair(arr, target, left, triplets) {
  const n = arr.length;
  let right = n - 1;
  while (left < right) {
    const currSum = arr[left] + arr[right];
    if (currSum === target) { // found a triplet
      triplets.push([-target, arr[left], arr[right]]);
      left ++;
      right --;
      while (left < right && arr[left] === arr[left-1]) {
        left ++; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right+1]) {
        right --; // skip same element to avoid duplicate triplets
      }
    } else if (target > currSum) {
      left ++;
    } else {
      right --;
    }
  }
};

function test() {
  console.log(JSON.stringify(tripletZeroSum([-3, 0, 1, 2, -1, 1, -2])) === JSON.stringify([[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]));
  console.log(JSON.stringify(tripletZeroSum([-5, 2, -1, -2, 3])) === JSON.stringify([[-5, 2, 3], [-2, -1, 3]]));
  console.log(tripletZeroSum([-3, 0, 1, 2, -1, 1, -2]));
  console.log(tripletZeroSum([-5, 2, -1, -2, 3]));
};

test();