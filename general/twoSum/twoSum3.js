/*
You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

Example:
Given [4, 7, 1 , -3, 2] and k = 5,
return true since 4 + 1 = 5.

def two_sum(list, k):
  # Fill this in.

print two_sum([4,7,1,-3,2], 5)
# True

Try to do it in a single pass of the list.
*/
// two pointer works in this case because we don't have to return the indices of the original array
// approach - sort array and use two pointers to find if there are two numbers that add to the target in one pass
function twoSum(arr, target) {
  arr = arr.sort((a,b) => a-b);
  let left = 0, right = arr.length-1;
  while (left < right) {
    let sum = arr[left]+arr[right]
    if (sum === target) {
      return true;
    } else if (sum > target) {
      right --;
    } else {
      left ++;
    }
  }
  return false;
};

function test() {
  console.log(twoSum([4, 7, 1 , -3, 2], 5));
  console.log(!twoSum([4, 7, 1 , -3, 2], 14));
  console.log(twoSum([4, 7, 1 , -3, 2], 4));
};

test();