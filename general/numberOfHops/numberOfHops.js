/*
Given an integer list where each number represents the number of hops you can make, determine whether you can reach to the last index starting at index 0.

For example, [2, 0, 1, 0] returns True while [1, 1, 0, 1] returns False.
*/

function canHopToEnd(nums) {
  const last = nums.length - 1;
  let pos = 0;
  while ((0 <= pos) && (pos <= last)) {
    if (pos === last) return true;
    if (nums[pos] === 0) return false;
    pos += nums[pos];
  };
  return false;
};

function test() {
  console.log( canHopToEnd([2, 0, 1, 0]) );
  console.log( !canHopToEnd([1, 1, 0, 1]) );
};

test();
