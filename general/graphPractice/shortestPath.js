/*
shortest path

Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return the length of the shortest path between A and B. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between A and B, then return -1.
*/
const buildGraph = (edges) => {
  const graph = {};
  for (let edge of edges) {
    let [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
// BFS traversal to find target node
const findDistance = (graph, node, target, visited) => {
  let level = 0
  let minDistance = Infinity;
  let queue = [node];
  while (queue.length) {
    let levelSize = queue.length;
    level ++;
    for (let i = 0; i < levelSize; i ++) {
      let curr = queue.shift();
      visited.add(curr);
      if (curr === target) return level-1;
      for (let neighbor of graph[curr]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return -1;
};

const shortestPath = (edges, nodeA, nodeB) => {
  // build graph
  const graph = buildGraph(edges);
  const visited = new Set();
  // find the shortest path between nodeA and nodeB
  return findDistance(graph, nodeA, nodeB, visited);
};

const test = () => {
  let edges = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
  ];

  console.log(shortestPath(edges, 'w', 'z') === 2); // -> 2
  console.log(shortestPath(edges, 'y', 'x') === 1); // -> 1
};

test();
