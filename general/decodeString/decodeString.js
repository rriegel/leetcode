/*
Given a string with a certain rule: k[string] should be expanded to string k times.
So for example, 3[abc] should be expanded to abcabcabc.
Nested expansions can happen, so 2[a2[b]c] should be expanded to abbcabbc.
*/
// use a slate/dfs type of approach


var decodeString = function(s) {
  let i = 0;
  const stack = [];

  while (i < s.length) {
    if (s[i] !== ']') {
      stack.push(s[i]);
    } else {
      let [res, rep, top] = ['','',''];
      while (stack.length) {
        top = stack.pop();
        if (top === '[') {
          break;
        } else {
          res = top + res;
        }
      }
      while (stack.length) {
        top = stack.pop();
        if (top >= '0' && top <= '9') {
          rep = top + rep;
        } else {
          stack.push(top);
          break;
        }
      }

      res = res.repeat(Number.parseInt(rep));
      stack.push(res);
    }
    i++;
  }

  res = '';
  while (stack.length) {
    res = stack.pop() + res;
  }
  return res;
};

function test() {
  console.log(decodeString('3[abc]'));
  console.log(decodeString('2[a2[b]c]'));
};

test();