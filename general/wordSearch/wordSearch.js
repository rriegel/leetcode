/*
You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix.
Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

Example:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]

Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.
*/

function wordSearch(matrix, target) {
  let yLen = matrix.length;
  let xLen = matrix[0].length;
  for (let i = 0; i < yLen; i ++) {
    for (let j = 0; j < xLen; j ++) {
      if (matrix[i][j] === target[0]) {
        let vertIdx = 1;
        let horizIdx = 1;
        if (matrix[i+vertIdx] !== undefined) {
          while (matrix[i+vertIdx][j] === target[vertIdx]) {
            // console.log(matrix[i+vertIdx][j]);
            if (vertIdx === target.length-1) return true;
            vertIdx ++;
          }
          vertIdx = 1;
        }
        if (matrix[i][j+horizIdx] !== undefined) {
          while (matrix[i][j+horizIdx] === target[horizIdx]) {
            if (horizIdx === target.length-1) return true;
            horizIdx ++;
          }
          horizIdx = 1;
        }
      }
    }
  }
  return false;
};

function test() {
  let puzzle = [['F', 'A', 'C', 'A'],
                ['O', 'B', 'Q', 'P'],
                ['A', 'N', 'O', 'E'],
                ['M', 'A', 'S', 'S']];
  let word = 'FOAM';
  console.log(wordSearch(puzzle, word));
  word = 'NO';
  console.log(wordSearch(puzzle, word));
  word = 'MASS';
  console.log(wordSearch(puzzle, word));
  word = 'PISS';
  console.log(wordSearch(puzzle, word) === false);
  word = 'APES';
  console.log(wordSearch(puzzle, word));
};

test();