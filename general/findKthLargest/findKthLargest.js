/*
Given a list, find the k-th largest element in the list.
Input: list = [3, 5, 2, 4, 6, 8], k = 3
Output: 5
*/
// simple solution --> sort and return element at idx length-k
// time --> O(n logn) because of the sort
// space --> O(1) constant space
function findKthLargest(nums, k) {
  nums = nums.sort((a,b) => a-b);
  return nums[nums.length-k];
};

function test() {
  console.log(findKthLargest([3, 5, 2, 4, 6, 8], 3) === 5);
  console.log(findKthLargest([3, 1, 2, 4, 6, 8], 3) === 4);
  console.log(findKthLargest([3, 1, 2, 4, 6, 8, 24, 1, 22, 4, 5, 6], 6) === 5);
  console.log(findKthLargest([3, 1, 2, 4, 6, 8, 24, 1, 22, 4, 5, 6], 1) === 24);
};

test();