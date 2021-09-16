/*
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/
/*
Complexity
Time: O(e) --- e = edges OR O(n^2) ... ?
Space: O(n) --- n = nodes
*/
// use a queue for BFS
function BFSHasPath(graph, src, dst) {
  const queue = [src];
  while (queue.length) {
    let curr = queue.shift();
    if (curr === dst) return true;

    let neighbors = graph[curr];
    for (let neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
  return false;
};
// use call stack
function DFSHasPath(graph, src, dst) {
  if (src === dst) return true;

  let neighbors = graph[src];
  for (let neighbor of neighbors) {
    if (DFSHasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
};


function test() {

  let graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };

  console.log(BFSHasPath(graph, 'f', 'k') === true);
  console.log(BFSHasPath(graph, 'i', 'h') === true);
  console.log(BFSHasPath(graph, 'i', 'f') === false);
  console.log(BFSHasPath(graph, 'f', 'j') === false);

  graph = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
  };

  console.log(DFSHasPath(graph, 'v', 'w') === true);
  console.log(DFSHasPath(graph, 'v', 'y') === false);
};

test();