/*
Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.
*/

/*
loop from back of nums to count when the prev num is greater than the current
when this count gets greater than 1, return false
after loop return true
*/

function checkPossibility(nums) {
  if (nums.length < 2) return true;
  let count = 0;
  for (let i = nums.length-1; i > 0; i --) {
    if (nums[i - 1] > nums[i]) {
      count ++;
      if (count > 1) return false;
    }
  }
  return true;
};

function test() {
  console.log(checkPossibility([2]) === true);
  console.log(checkPossibility([2, 1]) === true);
  console.log(checkPossibility([10, 5, 7]) === true);

  console.log(checkPossibility([10, 5, 4]) === false);
  console.log(checkPossibility([10, 5, 1]) === false);
  console.log(checkPossibility([13, 10, 5, 7]) === false);

  /* current function does not handle this case */
  console.log(checkPossibility([3,4,2,3]) === false);
};

test();