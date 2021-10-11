/*
Starting at index 0, for an element n at index i, you are allowed to jump at most n indexes ahead. Given a list of numbers, find the minimum number of jumps to reach the end of the list.

Example:
Input: [3, 2, 5, 1, 1, 9, 3, 4]
Output: 2
Explanation:

The minimum number of jumps to get to the end of the list is 2:
3 -> 5 -> 4
*/

/*
strategy
  vars to keep track of - currentJumps, minJumps, lastIdx, currIdx, maxJumpLength
  dfs type algorithm to traverse through the array and keep track of the min number of steps
*/

function jumpToTheEnd(nums) {

  const n = nums.length-1;
  let minJumps = Infinity;

  const dfs = (i, jMax, currJumps) => {
    if (i === n) {
      minJumps = Math.min(minJumps, currJumps);
      return;
    } else if (i > n) {
      return;
    } else {
      for (let j = 1; j <= jMax; j ++) {
        dfs(i + j, nums[j], currJumps + 1)
      }
    }
  };

  dfs(0, nums[0], 0);

  return minJumps;
};

function test() {
  console.log(jumpToTheEnd([0])); // --> 0
  console.log(jumpToTheEnd([3, 2, 1, 1])); // --> 1
  console.log(jumpToTheEnd([1, 2, 1, 1])); // --> 2
  console.log(jumpToTheEnd([3, 2, 5, 3, 1, 9, 1, 4])); // --> 2
  console.log(jumpToTheEnd([3, 2, 1, 3, 1, 9, 1, 4])); // --> 3
};

test();