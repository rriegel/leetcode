function minesweeper(matrix) {
  let newMatrix = [];
  for (let n = 0; n < matrix.length; n ++) {
    newMatrix[n] = [];
    for (let m = 0; m < matrix[n].length; m ++) {
      let currSquare = matrix[n][m];
      let mineCount = 0;
      if (n > 0 && matrix[n-1][m] === true) mineCount ++;
      if (m > 0 && matrix[n][m-1] === true) mineCount ++;
      if (n < matrix.length-1 && matrix[n+1][m] === true) mineCount ++;
      if (m < matrix[n].length-1 && matrix[n][m+1] === true) mineCount ++;
      if (m > 0 && n > 0 && matrix[n-1][m-1] === true) mineCount ++;
      if (m > 0 && n < matrix.length-1 && matrix[n+1][m-1] === true) mineCount ++;
      if (m < matrix[n].length-1 && n < matrix.length-1 && matrix[n+1][m+1] === true) mineCount ++;
      if (m < matrix[n].length-1 && n > 0 && matrix[n-1][m+1] === true) mineCount ++;
      newMatrix[n][m] = mineCount;
    }
  }
  return newMatrix;
};
// solution is O(n*m) time complexity and O(n*m) space complexity