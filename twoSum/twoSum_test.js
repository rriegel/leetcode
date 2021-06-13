// import twoSum from './twoSum.js';
import twoSum from './twoSum2.js';

var test = () => {

  console.log(twoSum([2,7,11,15], 9)) // should be [ 0, 1 ]

  console.log(twoSum([3,3], 6)) // should be [ 0, 1 ]

  console.log(twoSum([3,2,4], 6)) // should be [ 1, 2 ]

  console.log(twoSum([12,2,5,65,200,33,9,10], 19)) // should be [ 6, 7 ]
}

test();