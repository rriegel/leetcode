/*
Given a number in the form of a list of digits, return all possible permutations.

For example, given [1,2,3], return [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]].
*/

function allPermutations(nums) {
  const n = nums.length;
  const permutations = [];
  const dfs = (i) => {
    if (i === n-1) {
      permutations.push(nums.slice());
      return;
    } else {
      for (let j = i; j < n; j ++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        dfs(i+1);
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  };
  dfs(0);
  return permutations;
};

function test() {
  console.log(allPermutations([1,2]));
  console.log(allPermutations([1,2,3])); // --> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  console.log(allPermutations([4,5,6]));
};

test();