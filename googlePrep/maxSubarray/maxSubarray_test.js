const maxSubarray = require('./maxSubarray');

var test = () => {
  let arr = [-2,1,-3,4,-1,2,1,-5,4];
  console.log(maxSubarray(arr));
  arr = [1];
  console.log(maxSubarray(arr));
  arr = [5,4,-1,7,8];
  console.log(maxSubarray(arr));
};

test();