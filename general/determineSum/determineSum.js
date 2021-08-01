/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/
// approach options: brute force, two pointer, subtraction, binary search

/*
// brute force | quadratic time complexity O(n^2) | constant space complexity O(1)
function determineSum(arr, k) {
  for (let i = 0; i < arr.length; i ++) {
    let diff = k - arr[i];
    for (let j = 0; j < arr.length; j ++) {
      if (i === j) {
        j ++;
      }
      if (arr[j] === diff) {
        return true;
      }
    }
  }
  return false;
};
*/

// two pointer approach | linear time complexity O(n) | constant space complexity O(1)
function determineSum(arr, k) {
  arr = arr.sort((a, b) => a - b);
  let i = 0, j = arr.length-1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum < k) {
      i ++;
    } else if (sum > k) {
      j --;
    } else {
      return true;
    }
  }
  return false;
};

function test() {
  let arr = [7, 15, 3, 10];
  console.log(determineSum(arr, 17) === true);
  console.log(determineSum(arr, 18) === true);
  console.log(determineSum(arr, 11) === false);
  console.log(determineSum(arr, 20) === false);
  arr = [10, 15, 3, 7, 35, 2, 53, 6, 77, 12, 90, 88, 72, 13, 1, 34, 5];
}

test();