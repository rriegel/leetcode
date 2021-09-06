/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.

A province is a group of directly or indirectly connected cities and no other cities outside of the group.

You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.

Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
*/

// input: an nxn matrix of 0s and 1s
// a province is a group of directly or indirectly connected cities
// given an nxn matrix so the grid is square
// nxn matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected
  // otherwise, isConnected[i][j] = 0
// return number of provinces
/*
example1:
  isConnected = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
  ];
  output: 2
example2:
  isConnected = [
    [1,0,0],
    [0,1,0],
    [0,0,1]
  ];
  output: 3
example3:
  isConnected = [
    [1,0,0,1],
    [0,1,1,0],
    [0,1,1,1],
    [1,0,1,1]
  ];
  output: 1
 */
// approach:
  // loop through the entire matrix and explore it using a recursive function
  // accumulate the number of isolated islands (not touching other 1s)
    // this may be done with a visited Set()
    //

var findCircleNum = function(isConnected) {
  let provinces = 0;
  const adjList = buildAdjList(isConnected);
  const visited = {};
  for (let vertex = 0; vertex < adjList.length; vertex ++) {
    if (!visited[vertex]) {
      provinces ++;
      exploreDFS(vertex, adjList, visited);
    }
  }
  return provinces;
};

var exploreDFS = function(node, adjList, visited) {
  visited[node] = true;
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      exploreDFS(neighbor, adjList, visited);
    }
  }
};

var buildAdjList = function(edges, n=edges.length) {
  // notation to make a new array with a spec length and filling the idxs with distinct arrays
  // using .fill doesn't work here because that would assign 1 array to all the indices
  const adjList = Array.from({length: n}, () => []);
  // since the data is in the grid format we actually have to create the edge list
  for (let i = 0; i < edges.length; i ++) {
    adjList[i].push(...getEdges(i, edges[i]));
  }
  return adjList;
};
// creating the edge list using the array at each grid idx
var getEdges = function(idx, edge) {
  const edges = [];
  for (let i = 0; i < edge.length; i ++) {
    if (idx === i) continue;
    if (edge[i] === 0) continue;
    edges.push(i);
  }
  return edges;
}

