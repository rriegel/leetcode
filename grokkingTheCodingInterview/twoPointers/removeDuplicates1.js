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

// brute force approach - O(n^2)
function removeDups(arr) {
  let duplicates = 0;
  for (let i = 0; i < arr.length; i ++) {
    let currentVal = arr[i];
    for (let j = i+1; j < arr.length; j ++) {
      if (arr[j] === currentVal) {
        duplicates ++;
        i = j;
      }
    }
  }
  return arr.length - duplicates;
};

function test() {
  console.log(removeDups([2, 3, 3, 3, 6, 9, 9]) === 4);
  console.log(removeDups([2, 2, 2, 11]) === 2);
};

test();