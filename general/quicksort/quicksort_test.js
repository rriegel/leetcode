const quicksort = require('./quicksort.js');

var test1 = [10, 5, 2, 3];
var test2 = [11, 2, 1002, 214, 4, 412];

var test = () => {
  console.log(quicksort(test1));
  console.log(quicksort(test2));
};

test();