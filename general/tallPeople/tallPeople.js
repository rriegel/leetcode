/*
There are n people lined up, and each have a height represented as an integer.
A murder has happened right in front of them, and only people who are taller than everyone in front of them are able to see what has happened.
How many witnesses are there?

Example:
Input: [3, 6, 3, 4, 1]
Output: 3
Explanation: Only [6, 4, 1] were able to see in front of them.
*/

function witnesses(heights) {
  let maxHeight = 0;
  let witnessCount = 0;

  let i = heights.length;
  while (i--) {
    if (heights[i] > maxHeight) witnessCount ++;
    maxHeight = Math.max(maxHeight, heights[i]);
  }
  return witnessCount;
};

function test() {
  console.log(witnesses([3, 6, 3, 4, 1]) === 3);
  console.log(witnesses([3, 6, 3, 4, 2, 1]) === 4);
  console.log(witnesses([8, 3, 6, 3, 4, 2, 7]) === 2);
};

test();