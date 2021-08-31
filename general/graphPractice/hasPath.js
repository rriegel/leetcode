/*
has path
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

function BFSHasPath(graph, src, dst) {
  const queue = [src];
  while (queue.length) {
    let node = queue.shift();
    if (node === dst) return true;
    for (let neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }
  return false;
};

function DFSHasPath(graph, src, dst) {
  if (src === dst) return true;

  for (neighbor of graph[src]) {
    if (DFSHasPath(graph, neighbor, dst)) {
      return true;
    }
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

  console.log(BFSHasPath(graph, 'f', 'k'));
  console.log(BFSHasPath(graph, 'i', 'h'));
  console.log(BFSHasPath(graph, 'i', 'f') === false);
  console.log(BFSHasPath(graph, 'f', 'j') === false);

  graph = {
    v: ['x', 'w'],
    w: [],
    x: [],
    y: ['z'],
    z: [],
  };

  console.log(BFSHasPath(graph, 'v', 'w'));
};

test();