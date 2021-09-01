/*
largest component

Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
The function should return the size of the largest connected component in the graph.
*/
// DFS traversal
function explore(graph, currNode, visited) {
  if (visited.has(currNode)) return 0;

  let size = 1;
  visited.add(currNode);
  for (let neighbor of graph[currNode]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
};

function largestComponent(graph) {
  let maxSize = 0;
  let visited = new Set();
  for (let node in graph) {
    if (!visited.has(node)) {
      maxSize = Math.max(explore(graph, node, visited), maxSize);
    }
  }
  return maxSize;
};

function test() {
  console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
  })); // -> 4
};

test();