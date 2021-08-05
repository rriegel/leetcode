/*
String Anagrams (hard)

Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:
Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

Example 2:
Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
*/

function stringAnagrams(str, pat) {

};

function test() {
  let string = "ppqp", pattern = "pq";
  console.log(stringAnagrams(string, pattern));
  string = "abbcabc", pattern = "abc";
  console.log(stringAnagrams(string, pattern));
};

test();