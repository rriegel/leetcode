/*
Given a sorted list of positive numbers, find the smallest positive number that cannot be a sum of any subset in the list.

Example:
Input: [1, 2, 3, 8, 9, 10]
Output: 7
Numbers 1 to 6 can all be summed by a subset of the list of numbers, but 7 cannot.
*/

/*
the problem
  find the smallest number that cannot be formed by a subset of numbers in the list
    the numbers do not have to be contiguous

strategy
  using an inner recursive function to splice out all elements until [base case] is found
*/

/*
naive solution - O(n^n) time complexity (?) and space complexity (?)
  recursively find and store all possible sums from the input array
  sort the sums
  find the first missing number
*/

function smallestNonSum(nums) {
  const sums = [];

  const recur = (currSum, currNums) => {
    for (let i = 0; i < currNums.length; i ++) {
      sums.push(currSum + currNums[i]);
      const newNums = currNums.slice();
      newNums.splice(i, 1);
      recur(currSum + currNums[i], newNums);
    }
  };

  recur(0, nums);

  sums.sort((a, b) => a-b);
  let nonSum = null;

  let target = 1;
  for (let i = 0; i < sums.length - 1; i ++) {
    if (sums[i] === target) {
      while (sums[i + 1] === target) i ++;
      target ++;
    } else {
      nonSum = target;
      break;
    }
  }

  return nonSum;
};

function test() {
  console.log(smallestNonSum([17, 7, 2, 45, 72]) === 1);
  console.log(smallestNonSum([1, 2, 3, 8, 9, 10]) === 7);
};

test();