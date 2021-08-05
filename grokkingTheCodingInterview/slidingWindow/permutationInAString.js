/*
Permutation in a String (hard)

Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:
Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Example 2:
Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Example 3:
Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Example 4:
Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
*/
// sliding window with hash maps
function findPermutation(str, pat) {
  let wStart = 0;
  let strMap = {};
  let patMap = {};
  for (let i = 0; i < pat.length; i ++) {
    patMap[pat[i]] = patMap[pat[i]] + 1 || 1;
  };
  for (let wEnd = 0; wEnd < str.length; wEnd ++) {
    strMap[str[wEnd]] = strMap[str[wEnd]] + 1 || 1;
    if (strMap[str[wEnd]] > patMap[str[wEnd]] || patMap[str[wEnd]] === undefined) {
      wStart = wEnd+1;
      strMap = {};
    }
    if ((wEnd-wStart+1) === pat.length) {
      return true;
    }
  };
  return false;
};

function test() {
  let string = "oidbcaf", pattern = "abc";
  console.log(findPermutation(string, pattern) === true);
  // string = "odicf", pattern = "dc";
  // console.log(findPermutation(string, pattern) === false)
  // string = "bcdxabcdy", pattern = "bcdyabcdx";
  // console.log(findPermutation(string, pattern) === true)
  // string = "aaacb", pattern = "abc";
  // console.log(findPermutation(string, pattern) === true)
};

test();