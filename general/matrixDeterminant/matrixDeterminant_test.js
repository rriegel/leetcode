import determinant from './matrixDeterminant.js';

var m1 = [ [1, 3], [2,5]];
var m2 = [ [2,5,3], [1,-2,-1], [1, 3, 4]];

var test = () => {
  console.log(determinant([[1]])) // 1
  console.log(determinant(m1)) // -1
  console.log(determinant(m2)) // -20
};

test();