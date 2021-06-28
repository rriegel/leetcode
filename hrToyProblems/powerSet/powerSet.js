/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 *
 *
 *
 * O: array of all possible subsets of input set (string)
 * I: string of characters
 * C: N/A
 * E: adding the empty string seems like an edge case ; what if input is not string? ; what if input string is empty?
 */


var powerSet = function(str) {

  var set = [];
  var hash = {};
  if (!str) { str = ''; }
  str = str.split('').sort();

  // remove duplicates
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) {
      str.splice(i, 1);
      i--;
    }
  }

  // recursive through the sub sets
  var recurse = function(strSet) {
    var joined = strSet.join('');

    // check if we have visited this combo
    if (hash[joined]) { return; }
    hash[joined] = true;
    set.push(joined);

    // don't recurse to empty set - add it once at the end
    if (strSet.length === 1) { return; }

    // recurse all subsets
    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str);
  set.push(''); // the power set, by definition, includes the empty set

  return set;
  };

// var test = function() {
//   var actual = powerSet('');
//   var expected = '';
//   console.log('Handles Empty String: ', actual === expected);

//   var actual = powerSet(1234);
//   var expected = null;
//   console.log('Handles non-strings: ', actual === expected);

//   var actual = powerSet('a');
//   var expected = ['', 'a'];
//   console.log('Handles single letter string: ', actual === expected);

//   var actual = powerSet('jump');
//   var expected = ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"];
//   console.log('Handles longer strings: ', actual === expected);
// };

// test();