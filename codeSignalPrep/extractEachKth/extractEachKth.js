/*
extractEachKth

Given array of integers, remove each kth element from it.

Example

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer inputArray

Guaranteed constraints:
5 ≤ inputArray.length ≤ 15,
-20 ≤ inputArray[i] ≤ 20.

[input] integer k

Guaranteed constraints:
1 ≤ k ≤ 10.

[output] array.integer

inputArray without elements k - 1, 2k - 1, 3k - 1 etc.
*/

function solution(inputArray, k) {
  const res = [];
  for (let i = 0; i < inputArray.length; i ++) {
    if ((i+1) % k !== 0) {
      res.push(inputArray[i]);
    }
  }
  return res;
};

/* 
Big O Notation
this solution is O(n) time complexity and space complexity
*/