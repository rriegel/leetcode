/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

var a = 97;
var alphabet = {};
for (var i = 0; i<26; i++) {
  alphabet[String.fromCharCode(a + i)] = 1+i;
};

console.log(alphabet);

// recursion and dynamic programming
function waysToDecode(message) {

};

function test() {
  console.log(waysToDecode('111') === 3);
  console.log(waysToDecode('12') === 2);
};

test();