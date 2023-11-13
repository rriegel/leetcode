// 345. Reverse Vowels of a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // create a stack to hold vowels in string
  const stack = [];
  // loop through the s to add to stack
  for (let i = 0; i < s.length; i ++) {
      // if current letter is in the vowelMap
      if (s[i].toLowerCase() in vowelMap) {
          stack.push(s[i]);
      }
  }
  let result = "";
  // loop through the s to replace letters and unload the stack
  for (let i = 0; i < s.length; i ++) {
      // if current letter is in the vowelMap
      if (s[i].toLowerCase() in vowelMap) {
          let topOfStack = stack.pop();
          result += topOfStack;
      } else {
          result += s[i];
      }
  }
  return result;
};

const vowelMap = {
  'a': 1,
  'e': 1,
  'i': 1,
  'o': 1,
  'u': 1,
};

// Big O Notation
// Time Complexity: O(n)
// Space: O(1)