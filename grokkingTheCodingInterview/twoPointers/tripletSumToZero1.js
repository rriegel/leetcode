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

// iterative two pointer solution
function tripletZeroSum(arr) {
  arr = arr.sort((a, b) => a-b);
  let triplets = [];
  for (let i = 0; i < arr.length - 2; i ++) { // arr.length - 2 because mid and right pointers
    // handle potential duplicates
    if (i === 0 || (i > 0 && arr[i] !== arr[i-1])) {
      let target = 0-arr[i];
      let mid = i+1;
      let right = arr.length - 1;
      while (mid < right) {
        let sum = arr[mid] + arr[right];
        if (sum === target) { //mid and high minus left equals 0
          triplets.push([arr[i], arr[mid], arr[right]]);
          // handle potential mid duplicates
          while (arr[mid] === arr[mid+1]) {
            mid ++;
          }
          // handle potential right duplicates
          while (arr[right] === arr[right-1]) {
            right --;
          }
          // ^^^ handle duplicates BEFORE changing pointers because otherwise dups may not be detected
          mid ++;
          right --;
        } else if (sum > target) {
          right --;
        } else {
          mid ++;
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