// 238. Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const newArr = [];
  let mult = 1;
  for (let i = 0; i < nums.length; i ++) {
    newArr[i] = mult;
    mult *= nums[i];
  }
  mult = 1;
  for (let i = nums.length-1; i >= 0; i --) {
    newArr[i] *= mult;
    mult *= nums[i];
  }
  return newArr;
};