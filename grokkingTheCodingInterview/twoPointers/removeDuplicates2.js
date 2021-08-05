const {performance} = require('perf_hooks');
/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

// two pointer approach -- O(n)
function removeDups1(arr) {
  let i = 0, j = 1;
  while (j < arr.length) {
    if (arr[j] === arr[i]) {
      arr.splice(j, 1);
    } else {
      j ++;
    }
    if (arr[j] > arr[i]) {
      i = j-1;
    }
  }
  return arr.length;
};

// two pointer approach as done by grokking -- nextNonDup
function removeDups2(arr) {
  let nextNonDup = 1, i = 1;

  while (i < arr.length) {
    if (arr[nextNonDup - 1] !== arr[i]) {
      arr[nextNonDup] = arr[i];
      nextNonDup ++;
    }
    i ++;
  }
  return nextNonDup;
};

function test() {
  let t1 = performance.now();
  removeDups1([2, 3, 3, 3, 6, 9, 9]) === 4;
  let t2 = performance.now();
  console.log(`Time of my function: ${(t2-t1).toFixed(4)} ms`)
  // console.log(removeDups1([2, 2, 2, 11]) === 2);
  t1 = performance.now();
  removeDups2([2, 3, 3, 3, 6, 9, 9]) === 4;
  t2 = performance.now();
  console.log(`Time of grokking function: ${(t2-t1).toFixed(4)} ms`)
  // console.log(removeDups2([2, 2, 2, 11]) === 2);
};

test();