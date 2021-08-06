/*
Dutch National Flag Problem (medium)

Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

Example 1:
Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]

Example 2:
Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]
*/

// two pointers
function dutchFlagSort(arr) {
  let left = 0;
  let right = arr.length-1;
  let i = 0;
  // start two pointers algorithm
  while (i <= right) {
    if (arr[i] === 0) {
      [arr[i], arr[left]] = [arr[left], arr[i]]; // swap... ???
      i ++;
      left ++;
    } else if (arr[i] === 1) {
      i ++;
    } else {
      [arr[i], arr[right]] = [arr[right], arr[i]]; // swap... ???
      // only increment right here because the el at right maybe needs sorted again
      right --;
    }
  }
  return arr;
};

function test() {
  console.log(dutchFlagSort([1, 0, 2, 1, 0]));
  console.log(dutchFlagSort([2, 2, 0, 1, 2, 0]));
};

test();