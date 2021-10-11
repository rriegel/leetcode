/*
Two words can be 'chained' if the last character of the first word is the same as the first character of the second word.

Given a list of words, determine if there is a way to 'chain' all the words in a circle.

Example:
Input: ['eggs', 'karat', 'apple', 'snack', 'tuna']
Output: True
Explanation:
The words in the order of ['apple', 'eggs', 'snack', 'karat', 'tuna'] creates a circle of chained words.
*/

function chainedWords(words, currIdx = 0) {
  if (words.length === 1) {
    return true;
  } else {
    let curr = words[currIdx];
    let last = curr.length - 1;
    for (let i = 0; i < words.length; i ++) {
      if (curr === words[i]) {
        continue;
      }
      if (curr[last] === words[i][0]) {
        let chained = words[i];
        words.splice(currIdx, 1);
        currIdx = words.indexOf(chained);
        return chainedWords(words, currIdx);
      }
    }
    return false;
  }
};

function test() {
  console.log(chainedWords(['eggs', 'karat', 'apple', 'snack', 'tuna']) === true);
  console.log(chainedWords(['eggs', 'karat', 'apple', 'snack']) === false);
};

test();