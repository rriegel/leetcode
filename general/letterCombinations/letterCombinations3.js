/*
Given a mapping of digits to letters (as in a phone number), and a digit string, return all possible letters the number could represent.
You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …} then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

const phoneMap = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz'
};

function letterCombinations(digits) {
  const result = [];
  if (!digits.length) return result;

  const dfs = (i, currString) => {
    if (i === digits.length) {
      result.push(currString);
      return;
    }

    for (let idx = 0; idx < phoneMap[digits[i]].length; idx ++) {
      let letter = phoneMap[digits[i]][idx];
      dfs(i+1, currString + letter);
    }
  };

  dfs(0, "");

  return result;
};

function test() {
  console.log(letterCombinations("23"));
  console.log(letterCombinations("757"));
  console.log(letterCombinations("75759"));
};

test();