const merge = require('./mergeIntervals');

var test = () => {
  let intervals = [[1,2], [3,5], [8,9], [4,8]];
  console.log(merge(intervals));
  intervals = [[0,0], [1,2]];
  console.log(merge(intervals));
  intervals = [[1,3],[2,6],[8,10],[15,18]];
  console.log(merge(intervals));
};

test();