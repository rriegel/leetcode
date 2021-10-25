/*
You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.

For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.

Can you do this in linear time?
*/

// time - O(n) || space - O(n)
function longestConsecutive(nums) {
  const map = {};
  const len = nums.length;
  let max = 0, start = 0, end = 0, num;
  for (let i = 0; i < len; i ++) {
    num = nums[i];
    if (map[num]) continue;

    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;

    map[num] = {start: num, end: num};
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
};

function test() {
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4);
};

test();