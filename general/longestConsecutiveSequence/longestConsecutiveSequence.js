/*
This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.
*/
/*
i: array of nums
o: the count of longest consecuitve values in the input array
c: O(n) complexity -> time and space
e: empty array? array of length 1

Pseudocode
  create a map object and initiate values for max, start and end
  loop through the input array
    if the current num is not already in the map
      TERNARY: set start var to either be the start prop of the num - 1 in the map OR the num with a ternary based on if the num - 1 exists in the map
      TERNARY: set end var to either be the end prop of the num + 1 in the map OR the num with a ternary based on if the num + 1 exists in the map
      initiate the start and end props of map[num] to be the num
      then update them based on the start / end vals that were just calculated
      take the max of end-start+1 and max to keep track of max length
  return max
*/
function longestSequence(nums) {
  const map = {};
  let max = 0, start = 0, end = 0;
  for (let num of nums) {
    if (!map[num]) {
      start = map[num - 1] ? map[num - 1].start : num;
      end = map[num + 1] ? map[num + 1].end : num;
      map[num] = {start: num, end: num};
      map[start].end = end;
      map[end].start = start;
      max = Math.max(end - start + 1, max);
    }
  }
  return max;
};

function test() {
  console.log(longestSequence([100, 4, 200, 1, 3, 2]) === 4);
};

test();