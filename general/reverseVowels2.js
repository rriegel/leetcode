// 345. Reverse Vowels of a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  // write a while loop with left and right pointers to swap vowels
  const sArr = s.split('');
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
      let leftIsVowel = s[left].toLowerCase() in vowelMap;
      let rightIsVowel = s[right].toLowerCase() in vowelMap;
      if (leftIsVowel && rightIsVowel) {
          let lChar = s[left];
          let rChar = s[right];
          sArr[left] = rChar;
          sArr[right] = lChar;
          left ++;
          right --;
      }
      if (leftIsVowel && !rightIsVowel) {
          right --;
      }
      if (!leftIsVowel && rightIsVowel) {
          left ++;
      }
      if (!leftIsVowel && !rightIsVowel) {
          left ++;
          right --;
      }
  }
  return sArr.join('');
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