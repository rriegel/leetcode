/*
Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.
*/

function wordSearch(board, target) {
  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < board[i].length; j ++) {
      if (board[i][j] === target[0]) {
        if (search(board, target, 1, i, j, 'down') || search(board, target, 1, i, j, 'right')) {
          return true;
        }
      }
    }
  }
  return false;
};

function search(board, target, i, r, c, direction) {
  if (i === target.length) return true;

  if (direction === 'down') {
    if (board[r][c+i] === target[i]) {
      return search(board, target, i+1, r, c, direction);
    }
  } else {
    if (board[r+i][c] === target[i]) {
      return search(board, target, i+1, r, c, direction);
    }
  }

  return false;
};

function test() {
  let board = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
  ];
  console.log(wordSearch(board, 'FOAM') === true);
  console.log(wordSearch(board, 'MASS') === true);
  console.log(wordSearch(board, 'NOB') === true);
  console.log(wordSearch(board, 'FAUCI') === false);
  console.log(wordSearch(board, 'FOB') === false);
};

test();