import almostIncreasingSequence from './almostIncreasingSequence.js';

var test = () => {
  console.log(almostIncreasingSequence([1,4]) === true);
  console.log(almostIncreasingSequence([1,1,2,3,4]) === true);
  console.log(almostIncreasingSequence([1,1,0,3,4]) === false);
};

test();