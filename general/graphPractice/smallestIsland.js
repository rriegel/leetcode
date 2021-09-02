/*
minimum island
Write a function, minimumIsland, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the size of the smallest island. An island is a vertically or horizontally connected region of land.

You may assume that the grid contains at least one island.
*/
const explore = (grid, r, c, visited) => {
  // ensure that coordinates are in bounds of the grid
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return 0;

  if (grid[r][c] === 'W') return 0;

  let pos = r + ',' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;
  size += explore(grid, r-1, c, visited);
  size += explore(grid, r+1, c, visited);
  size += explore(grid, r, c-1, visited);
  size += explore(grid, r, c+1, visited);

  return size;
};

const minimumIsland = (grid) => {
  // we want to keep track of the smallest island
  // we can do grid search and keep track of visited "nodes" to accurately traverse the grid
  // we can make the search function return sizes of the islands so that in the main funciton we can compare the sizes and keep the min

  let minIsland = Infinity;
  let visited = new Set();
  for (let r = 0; r < grid.length; r ++) {
    for (let c = 0; c < grid[0].length; c ++) {
      const size = explore(grid, r, c, visited);
      if (0 < size && size < minIsland) {
        minIsland = size;
      }
    }
  }
  return minIsland;
};

const test1 = () => {
  const grid = [
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W'],
    ['W', 'W', 'L', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'W'],
  ];

  console.log(minimumIsland(grid)); // -> 2
};

const test2 = () => {
  const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
  ];

  console.log(minimumIsland(grid)); // -> 1
}

test1();
test2();