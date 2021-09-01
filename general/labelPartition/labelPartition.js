/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Return a list of integers representing the size of these parts.
*/

var partitionLabels = function(s) {
  // map the letter to its last occurence
  let lastIndex = new Map();
  for (let i = 0; i < s.length; i ++) {
    lastIndex.set(s[i], i);
  }
  // two pointer approach
  let res = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i ++) {
      end = Math.max(end, lastIndex.get(s[i]));
      if (i === end) {
        res.push(end - start + 1);
        start = end + 1;
      }
  }
  return res;
};