/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



 var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var storage = {};
  string1 = string1.split('');
  string2 = string2.split('');
  string1.forEach(char1 => {
    string2.forEach(char2 => {
      if (char1 === char2 && storage[char2] === undefined && char2 !== ' ') {
        storage[char2] = 1;
      }
    })
  })
  console.log(Object.keys(storage).join(''));
  return Object.keys(storage).join('');
};

// test
// commonCharacters('acexivou', 'aegihobu'); // 'aeiou'