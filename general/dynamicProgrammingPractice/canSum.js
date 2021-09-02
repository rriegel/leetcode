/*
canSum

wirte a function canSum(targetSum, nums) that takes in a target sum and an array of numbers as arguments.

the function should return a boolean indicating whether or not it is possible to generate the target sum using numbers from the array

you may use an element of the array as many times as needed

you may assume that all input numbers are non-negative
*/
const canSum1 = (targetSum, nums) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    const remainder = targetSum - num;
    if (canSum1(remainder, nums) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum1(7, [2, 3])); // --> true;
console.log(canSum1(7, [5, 3, 4, 7])); // --> true;
console.log(canSum1(7, [2, 4])); // --> false;
console.log(canSum1(8, [2, 3, 5])); // --> true;


const canSum2 = (targetSum, nums, memo={}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    const remainder = targetSum - num;
    if (canSum2(remainder, nums, memo) === true) {
      memo[targetSum] = true;
      return memo[targetSum];
    }
  }
  memo[targetSum] = false;
  return memo[targetSum];
};

// this larger input takes a long time
console.log(canSum2(300, [7, 14])); // false