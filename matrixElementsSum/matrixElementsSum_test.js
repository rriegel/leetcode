import matrixElementsSum from './matrixElementsSum.js';

let matrix1 = [
  [0,1,1,2],
  [0,5,0,0],
  [2,0,3,3]
];

let matrix2 = [
  [1,1,1],
  [2,2,2],
  [3,3,3]
];

let matrix3 = [
  [4,0,1],
  [10,7,0],
  [0,0,0],
  [9,1,2]
];

function test() {
  console.log(matrixElementsSum(matrix1)); // 9
  console.log(matrixElementsSum(matrix2)); // 18
  console.log(matrixElementsSum(matrix3)); // 15
};

test();