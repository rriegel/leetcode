/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

You must do it in place.
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
  let rows = [];
  let col = [];
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j ++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        col.push(j)
      }
    }
  }
  for (let i = 0; i < matrix.length; i ++) {
    if (rows.includes(i)) {
      for (let j = 0; j < matrix[i].length; j ++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 0; j < matrix[0].length; j ++) {
    if (col.includes(j)) {
      for (let i = 0; i < matrix.length; i ++) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};