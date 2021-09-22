/*
Given a 2-dimensional grid consisting of 1's (land blocks) and 0's (water blocks), count the number of islands present in the grid. The definition of an island is as follows:
1.) Must be surrounded by water blocks.
2.) Consists of land blocks (1's) connected to adjacent land blocks (either vertically or horizontally).
Assume all edges outside of the grid are water.

Example:
Input:
10001
11000
10110
00000

Output: 3
*/

function countIslands(grid) {
  // we are given the adjacency matrix so we do not need to create it
  const visited = new Set();
  let count = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[i].length; j ++) {
      // if explore returns true - increment visited
      if (explore(grid, i, j, visited) === true) {
        count ++;
      }
    }
  }
  return count;
};

function explore(grid, r, c, visited) {
  // check if row and column are inbound
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) {
    return false;
  }
  // check if its a water block (0)
  if (grid[r][c] === 0) {
    return false;
  }
  // check if position has been visited
  const pos = r + ',' + c;
  if (visited.has(pos)) {
    return false;
  }
  // add position to visited
  visited.add(pos);
  // recursively call explore on each neighbor
  explore(grid, r + 1, c, visited);
  explore(grid, r - 1, c, visited);
  explore(grid, r, c + 1, visited);
  explore(grid, r, c - 1, visited);
  // return true
  return true;
};

function test() {
  let grid = [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ];

  console.log(countIslands(grid) === 3);

  grid = [
    [1, 0, 0, 1, 1],
    [1, 1, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
  ];

  console.log(countIslands(grid) === 2);
};

test();