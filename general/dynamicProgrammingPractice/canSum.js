/*
canSum

wirte a function canSum(targetSum, nums) that takes in a target sum and an array of numbers as arguments.

the function should return a boolean indicating whether or not it is possible to generate the target sum using numbers from the array

you may use an element of the array as many times as needed

you may assume that all input numbers are non-negative
*/
const canSum = (targetSum, nums) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    const remainder = targetSum - num;
    if (canSum(remainder, nums) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3])); // --> true;
console.log(canSum(7, [5, 3, 4, 7])); // --> true;
console.log(canSum(7, [2, 4])); // --> false;
console.log(canSum(8, [2, 3, 5])); // --> true;
// this larger input takes a long time
console.log(canSum(300, [7, 14])); // false