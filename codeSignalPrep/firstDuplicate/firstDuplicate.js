/*
firstDuplicate

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be solution(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

[output] integer

The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.
*/

function solution(a) {
  // create an array b with 0s as values, the same length as a
  const b = Array(a.length).fill(0);
  // loop through a
  for (let i = 0; i < a.length; i ++) {
      // use the value of a[i]
      // and put a 1 in b's index that is a[i] - 1
      if (b[a[i] - 1] === 0) {
          b[a[i] - 1] = 1;   
      } else {
          // if b[a[i] - 1] already == 1, return that value (a[i])
          // because that means it is the first duplicate
          // this works with an array instead of an object
          // because the nums are between 1 and a.length
          return a[i];
      }
  }
  return -1;
}
