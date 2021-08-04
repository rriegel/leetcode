/*
A palindrome is a sequence of characters that reads the same backwards and forwards. Given a string, s, find the longest palindromic substring in s.

Example:
Input: "banana"
Output: "anana"

Input: "million"
Output: "illi"
*/

function longestPalindrome(s) {
  let longestPal = '';

  var getLongestPalindrome = function (lPos, rPos) {
    while (
      lPos >= 0 &&
      rPos < s.length &&
      s[lPos] === s[rPos]
    ) {
      lPos--;
      rPos++;
    }
    if (rPos - lPos > longestPal.length) {
      longestPal = s.slice(lPos+1, rPos);
    }
  };

  for (let i = 0; i < s.length; i ++) {
    // find longest odd palindrome
    getLongestPalindrome(i, i+1);
    // find longest even palindrome
    getLongestPalindrome(i, i);

    if ((s.length - i) * 2 < longestPal.length) {
      break;
    }
  }
  return longestPal;
}