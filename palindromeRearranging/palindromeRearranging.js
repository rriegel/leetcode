/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
*/

function palindromeRearranging(s) {
  let tot = 0, stor = {};
  // put letters in an object with their appearance count
  for (let i = 0; i < s.length; i ++) {
      let curr = s.charAt(i);
      if (stor[curr]) {
          stor[curr] ++;
      } else {
          stor[curr] = 1;
      }
      tot ++;
  }
  // if total count is even
  if (tot % 2 === 0) {
      // all letter counts must be even
      for (let char in stor) {
          if (stor[char] % 2 === 1) {
              return false;
          }
      }
  // else
  } else {
      // 1 letter count must be odd to be a palindrome
      let odd = 0;
      for (let char in stor) {
          if (stor[char] % 2 === 1) {
              odd ++;
              if (odd > 1) {
                  return false;
              }
          }
      }
  }
  return true;
};