/*
undirected path

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB). The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/
function buildGraph(edges) {
  const graph = {};

  for (let edge of edges) {
    // destructure edge nodes ()
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

function hasPath(graph, src, dst, visited) {
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }
  return false;
};

function undirectedPath(edges, nodeA, nodeB) {
  // convert edgeList into adjList
  const graph = buildGraph(edges);
  const visited = {};
  return hasPath(graph, nodeA, nodeB, new Set());
};

function test() {
  let edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  console.log(undirectedPath(edges, 'j', 'm')) // -> true
  console.log(undirectedPath(edges, 'm', 'j')) // -> true
  console.log(undirectedPath(edges, 'l', 'j')) // -> true
  console.log(undirectedPath(edges, 'k', 'o') === false) // -> false
};

test();