import movesToMakeZigzag from './decreaseElementsToMakeArrayZigzag.js';

var test = () => {

  let nums = [1,2,3];
  console.log(movesToMakeZigzag(nums)); // 2

  nums = [9,6,1,6,2];
  console.log(movesToMakeZigzag(nums)); // 4
};

test();