/*
You are given an array of integers. Return the length of the longest consecutive elements sequence in the array.

For example, the input array [100, 4, 200, 1, 3, 2] has the longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.

Can you do this in linear time?
*/

// time - O(nlogn) || space - O(1)
function longestConsecutive(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return 1;
  nums.sort((a,b) => a-b);
  let longest = 0, curr = 0, len = nums.length;
  for (let i = 0; i < len; i ++) {
    if (nums[i] === nums[i+1]) continue;
    if (nums[i] === nums[i+1] - 1) curr ++;
    if ((nums[i] !== nums[i+1] - 1) || i === len - 1) {
      longest = Math.max(curr + 1, longest);
      curr = 0;
    }
  }
  return longest;
};

function test() {
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2]) === 4);
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) === 9);
};

test();
