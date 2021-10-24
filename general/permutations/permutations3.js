/*
You are given an array of integers. Return all the permutations of this array.

def permute(nums):
  # Fill this in.

print permute([1, 2, 3])
# [[1, 2, 3], [2, 1, 3], [2, 3, 1], [1, 3, 2], [3, 1, 2], [3, 2, 1]]
*/

function permutations(nums) {
  if (!nums.length) return [];
  const perms = [];

  function bt(i) {
    if (i === nums.length - 1) {
      perms.push(nums.slice());
      return;
    }
    for (let j = i; j < nums.length; j ++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      bt(i+1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  bt(0);

  return perms;
};

function test() {
  console.log(permutations([1, 2, 3]));
  console.log(permutations(['l', 'e', 'k']));
};

test();