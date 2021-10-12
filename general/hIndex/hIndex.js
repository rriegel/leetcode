/*
The h-index is a metric that attempts to measure the productivity and citation impact of the publication of a scholar. The definition of the h-index is if a scholar has at least h of their papers cited h times.

Given a list of publications of the number of citations a scholar has, find their h-index.

Example:
Input: [3, 5, 0, 1, 3]
Output: 3
Explanation:
There are 3 publications with 3 or more citations, hence the h-index is 3.
*/
/*
i: array of nums
o: the hIndex (which is a number indicating that h papers have been cited h times)
c: n/a
e: if you one paper that means your max hIndex is 1
   there are two limiting factors - the number of papers published and the max cited paper
*/
/*
possible strategies
1) time O(n) | space O(n)
populating an object with the values in the array and incrementing count of keys that are greater or equal to nums[i]
looping back through the object to return the max key whose value is at least equal to the key

*** 2) time O(n*logn) | space O(1) ***
first sort the array
and then loop through the sorted array from the back to compare the value to its position in the array
  this will validate if it can be counted as h index or not
*/
function hIndex(nums) {
  // edge case
  if (nums.length === 1) return nums[0] > 0 ? 1 : 0;

  let h = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = nums.length-1; i >= 0; i --) {
    if (nums.length-i+1 >= nums[i]) {
      h = Math.max(h, nums[i]);
      h = Math.min(h, nums.length);
    }
  }
  return h;
};

function test() {
  console.log(hIndex([0]) === 0);
  console.log(hIndex([3]) === 1);
  console.log(hIndex([3, 4]) === 2);
  console.log(hIndex([2, 2, 2, 2]) === 2);
  console.log(hIndex([3, 5, 0, 1, 3]) === 3);
  console.log(hIndex([3, 5, 2, 4, 6, 8]) === 4);
  console.log(hIndex([3, 1, 2, 4, 6, 8, 24, 1, 22, 4, 6, 6]) === 6);

};

test();