/*
Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number. Your solution should ideally be O(n) time and use constant extra space.
Example:
Input: arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
Output: 7
*/
/*
[7, 3, 5, 5, 4, 3, 4, 8, 8]
[3,3,4,4,5,5,7,8,8]

[3,3,4,4,5,5,8,8,9]
*/

// sorting means that time is O(nlogn)

function findSingleElement(nums) {
  nums = nums.sort((a,b) => a-b);

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i+1]) {
      return nums[i];
    }
    if (i + 2 === nums.length) {
      return nums[i+1];
    }
  }
};


function findSingleElementXOR(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i ++) {
    res ^= nums[i];
  }
  return res;
};

function test() {
  console.log(findSingleElement([7, 3, 5, 5, 4, 3, 4, 8, 8]) === 7);
  console.log(findSingleElement([3, 3, 4, 4, 5, 5, 8, 8, 9]) === 9);

  console.log(findSingleElementXOR([7, 3, 5, 5, 4, 3, 4, 8, 8]) === 7);
  console.log(findSingleElementXOR([3, 3, 4, 4, 5, 5, 8, 8, 9]) === 9);
};

test();