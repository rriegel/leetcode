/*
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:
Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:
Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
*/

// outside in approach - two pointers - O(n) linear time
function squareArray1(arr) {
  const n = arr.length;
  let squares = [];
  let highestSquareIdx = n-1;
  let left = 0, right = n-1;
  while (left <= right) {
    let sq1 = arr[left]*arr[left];
    let sq2 = arr[right]*arr[right];
    if (sq1 > sq2) {
      squares[highestSquareIdx] = sq1;
      left ++;
    } else {
      squares[highestSquareIdx] = sq2;
      right --;
    }
    highestSquareIdx --;
  }
  return squares;
};

function test() {
  console.log(JSON.stringify(squareArray1([-2, -1, 0, 2, 3])) === JSON.stringify([0, 1, 4, 4, 9]))
  console.log(JSON.stringify(squareArray1([-3, -1, 0, 1, 2])) === JSON.stringify([0, 1, 1, 4, 9]))
};

test();