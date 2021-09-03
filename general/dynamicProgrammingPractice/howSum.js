/*
howSum

write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments

the function should return an array containing any compbination of elements that add up to exactly the targetSum. if there is no combination that adds up to the targetSum, then return null

if there are mutliple combinations possible, you may return any single one.
*/

// m = target sum
// n = numbers.length
//
// Brute Force
// time: O(n^m * m)
// space: O(m)
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
      return [ ...remainderResult, num ];
    }
  }
  return null;
};

// m = target sum
// n = numbers.length
//
// Memoized
// time: O(n * m^2)
// space: O(m^2)
const howSum2 = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];

  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum2(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [ ...remainderResult, num ];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
};

const test = () => {
  console.log(howSum(8, [2, 3, 5])); // --> [2, 2, 2, 2] OR [3, 5]
  console.log(howSum(7, [2, 4])); // --> null
  console.log(howSum(0, [1, 2, 3])); // --> []
  console.log(howSum2(300, [7, 14])); // --> null
};

test();
