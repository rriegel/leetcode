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

// tried to do this iteratively but cannot get it to work
function tripletZeroSum(arr) {
  arr = arr.sort((a, b) => a - b)
  let triplets = [];

  for (let left = 0; left < arr.length-2; left ++) {
    const n = arr.length;
    if (left === 0 || (left > 0 && arr[left] !== arr[left-1])) { // skip same element to avoid duplicate triplets
      let mid = left+1;
      let right = n - 1;
      let target = -arr[left];

      while (mid < right) {
        const currSum = arr[mid] + arr[right];
        if (currSum === target) { // found a triplet
          triplets.push([arr[left], arr[mid], arr[right]]);
          while (mid < right && arr[mid] === arr[mid+1]) {
            mid ++; // skip same element to avoid duplicate triplets
          }
          while (mid < right && arr[right] === arr[right-1]) {
            right --; // skip same element to avoid duplicate triplets
          }
          mid++;
          right--;
        } else if (target > currSum) {
          mid ++;
        } else {
          right --;
        }
      }

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