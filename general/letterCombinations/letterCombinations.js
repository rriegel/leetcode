/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

var phoneMap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};
// this can be solved using DFS type algorithm
// recursively call the function until the string length is the length of the input digits to push into the answer array
var letterCombinations = function(digits) {
  if (!digits.length) return [];
  let res = [];
  const DFS = (pos, currStr) => {
    if (pos === digits.length) res.push(currStr)
    else {
      let letters = phoneMap[digits[pos]];
      for (let i = 0; i < letters.length; i ++) {
        DFS(pos+1, currStr + letters[i]);
      }
    }
  };
  DFS(0, "");
  return res;
};