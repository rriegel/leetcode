// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const n = S.length;
  const blocks = [];
  let start = 0;
  for (let i = 0; i < n; i ++) {
      if (S[i] !== S[i+1] || i === n - 1) {
          if (i === n - 1) {
              blocks.push(S.substring(start, i+1));
          } else {
              blocks.push(S.substring(start, i+1));
              start = i+1;
          }
      }
  }
  let maxLength = 0;
  for (let i = 0; i < blocks.length; i ++) {
      maxLength = Math.max(maxLength, blocks[i].length);
  }
  let additional = 0;
  for (let i = 0; i < blocks.length; i ++) {
      additional += (maxLength - blocks[i].length);
  }
  return additional;
}
