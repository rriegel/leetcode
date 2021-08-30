/*
Run-length encoding is a fast and simple method of encoding strings.
The basic idea is to represent repeated successive characters as a single count and character.
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding.
You can assume the string to be encoded have no digits and consists solely of alphabetic characters.
You can assume the string to be decoded is valid.
*/

// O(n) time complexity and O(n) space complexity
// this is basically a sliding window application
function encode(str) {
  let res = "";
  let count = 0;
  let prev, char;
  for (let i = 0; i <= str.length; i ++) {
    char = str[i];
    if ((prev && prev !== char) || i === str.length) {
      res += count.toString() + prev;
      count = 0;
    }
    count ++;
    prev = char;
  };
  return res;
};

function decode(str) {
  let res = "";
  let rep, char;
  for (let i = 0; i < str.length; i += 2) {
    rep = Number(str[i]);
    char = str[i+1];
    res += char.repeat(rep);
  }
  return res;
};

function test() {
  let code1 = encode("AAAABBBCCDAA");
  let code2 = encode("EERROORRSSS");
  let code3 = encode("A");
  console.log(code1);
  console.log(code2);
  console.log(code3);

  let decode1 = decode(code1);
  let decode2 = decode(code2);
  let decode3 = decode(code3);
  console.log(decode1);
  console.log(decode2);
  console.log(decode3);

};

test();