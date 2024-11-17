const insert = require("./insertInterval");

/*
Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
*/

const test = () => {
  const test1 = insert([[1,3],[6,9]], [2,5]);
  const test2 = insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]);

  const assert1 = JSON.stringify(test1) === JSON.stringify([[1,5],[6,9]]);
  const assert2 = JSON.stringify(test2) === JSON.stringify([[1,2],[3,10],[12,16]]);
  
  console.log("Test results:");
  console.log("Test 1: " + assert1);
  console.log("Test 2: " + assert2);
};

test();
