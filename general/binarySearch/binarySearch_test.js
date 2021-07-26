import binarySearch from './binarySearch.js';

var test = () => {
  console.log(binarySearch(1, 1)); //should be ERROR
  console.log(binarySearch([1], 1)); //should be 0
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7)); //should be 6
  console.log(binarySearch([1, 2, 3], 7)); //should be null
};

test();