const adjList = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

const DFSiterative = (graph, start) => {
  const stack = [start];

  while (stack.length) {
    let curr = stack.pop();
    console.log(curr);
    for (let neighbor of adjList[curr]) {
      stack.push(neighbor);
    }
  }
};
// utilizes the call STACK
const DFSrecursive = (graph, start) => {
  console.log(start);
  for (let neighbor of graph[start]) {
    DFSrecursive(graph, neighbor);
  }
};

const BFSiterative = (graph, start) => {
  const queue = [start];

  while (queue.length) {
    let curr = queue.shift();
    console.log(curr);
    for (let neighbor of adjList[curr]) {
      queue.push(neighbor);
    }
  }
};

// DFSiterative(adjList, 'a'); // acebdf
// console.log('~~~~~~~~~~~~~~~~~~~~~~~~');
// DFSrecursive(adjList, 'a'); // abdfce

BFSiterative(adjList, 'a'); // abcdef