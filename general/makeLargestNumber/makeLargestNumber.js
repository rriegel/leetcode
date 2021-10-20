/*
Given a number of integers, combine them so it would create the largest number.

Example:
Input:  [17, 7, 2, 45, 72]
Output:  77245217
*/

/*
strategy
1) make a custom sort function
  - look at numbers as strings and compare their first index values
  - while index values are the same continue to check next value
2) return the custom sorted array as a joined string as a number
*/

function makeLargestNumber(nums) {
  nums.sort((a, b) => {
    let i = 0;
    let digA = Number(a.toString()[i]);
    let digB = Number(b.toString()[i]);
    while (digA === digB) {
      i ++;
      digA = Number(a.toString()[i]);
      digB = Number(b.toString()[i]);
    }
    if (isNaN(digA)) return -1;
    if (isNaN(digB)) return 1;
    return digB - digA;
  })

  return Number(nums.join(''));
};

function test() {
  console.log(makeLargestNumber([17, 7, 73, 2, 45, 72]) === 7737245217);
  console.log(makeLargestNumber([2, 5, 3, 21, 2, 1, 0, 3, 4]) === 5433222110);
};

test();