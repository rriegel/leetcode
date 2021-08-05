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
// sliding window, hash the str and the pattern, when the hashes match exactly, add that starting index to an array
function stringAnagrams(str, pat) {
  let anagrams = [];
  let wStart = 0;
  let patMap = {};
  let matched = 0;

  for (let i = 0; i < pat.length; i ++) {
    patMap[str[i]] = patMap[str[i]] + 1 || 1;
  }

  for (let wEnd = 0; wEnd < str.length; wEnd ++) {
    let currChar = str[wEnd];

    if (currChar in patMap) {
      patMap[currChar] -= 1;
      if (patMap[currChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(patMap).length) {
      anagrams.push(wStart);
    }

    if (wEnd >= pat.length - 1) {
      let firstChar = str[wStart];
      wStart ++;
      if (firstChar in patMap) {
        if (patMap[firstChar] === 0) {
          matched -= 1;
        }
        patMap[firstChar] += 1;
      }
    }
  }

  return anagrams;
};

function test() {
  let string = "ppqp", pattern = "pq";
  console.log(stringAnagrams(string, pattern));
  string = "abbcabc", pattern = "abc";
  console.log(stringAnagrams(string, pattern));
};

test();