/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 var firstNonRepeatedCharacter = function(string) {

    var mem = {};
    var c;
    for (var i = 0; i < string.length; i++) {
      c = string[i];
      if (!mem[c]) {
        mem[c] = 1;
      } else {
        mem[c]++;
      }
    }
    for (i = 0; i < string.length; i++) {
      c = string[i];
      if (mem[c] === 1) { return c; }
    }
    return null;
    };


// var test = function() {
//   var actual = firstNonRepeatedCharacter('');
//   var expected = null; // we will expect undefined to be returned from an empty string
//   console.log(actual === expected);

//   var actual = firstNonRepeatedCharacter('ABA');
//   var expected = 'B';
//   console.log(actual === expected);

//   var actual = firstNonRepeatedCharacter('AACBDB');
//   var expected = 'C';
//   console.log(actual === expected);

//   var actual = firstNonRepeatedCharacter('AABB');
//   var expected = null;
//   console.log(actual === expected);
// }

// test();