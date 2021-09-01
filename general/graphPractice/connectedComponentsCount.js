/*
connected components count

Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
The function should return the number of connected components within the graph.
*/

// DFS traversal
const explore = (graph, currNode, visited) => {
  currNode = Number(currNode);

  if (visited.has(currNode)) return false;

  visited.add(currNode);
  for (let neighbor of graph[currNode]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
// count components
const connectedComponentsCount = (graph) => {
  let count = 0;
  let visited = new Set();
  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count ++;
    }
  }
  return count;
};

const test = () => {
  console.log(connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
  })); // -> 2

  console.log(connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
  })); // -> 1
};

test();