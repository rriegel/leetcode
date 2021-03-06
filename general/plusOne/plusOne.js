/*
Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

Example:
Input: [2,3,4]
Output: [2,3,5]
class Solution():
  def plusOne(self, digits):
    # Fill this in.

num = [2, 9, 9]
print(Solution().plusOne(num))
# [3, 0, 0]
*/

function plusOne(nums) {
  const n = nums.length;
  let i = n-1, carry = false;
  while (i >= 0 && (i === n-1 || carry)) {
    if (nums[i] === 9) {
      nums[i] = 0;
      carry = true;
    } else {
      nums[i] ++;
      carry = false;
    }
    i --;
  }
  if (carry) {
    nums.unshift(1);
    carry = false;
  }
  return nums;
};

function test() {
  console.log(plusOne([2,3,4])) // [2,3,5]
  console.log(plusOne([2,9,9])) // [3,0,0]
  console.log(plusOne([1,3,4,9])) // [1,3,5,0]
  console.log(plusOne([9,9])) // [1,0,0]
};

test();
