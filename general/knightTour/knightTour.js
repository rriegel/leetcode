/*
A knight's tour is a sequence of moves by a knight on a chessboard such that all squares are visited once.

Given N, write a function to return the number of knight's tours on an N by N chessboard.
*/

function knightTour(N) {
  let board = new Array(N).fill([]);
  for (let i = 0; i < N; i ++) {
    board[i] = new Array(N).fill(0);
  }

  for (let i = 0; i < board.length; i ++) {
    for (let j = 0; j < board[0].length; j ++) {
      traverse(board, i, j, new Set()); // TODO
    }
  }
};

function traverse(grid, r, c, visited) {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid.length;
  if (!rowInbounds || !colInbounds) {
    return 0;
  }
}

function test() {
  console.log(knightTour(1) === 1);
  console.log(knightTour(2) === 2);
  // console.log(knightTour(3) === );
};

test();