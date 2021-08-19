class Graph {
  constructor(name='graph') {
    this.name = name;
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (this.adjacencyList[v]) {
      throw `Vertex "${v}" already exists in "${this.name}"`;
    }
    // regex for replacing all spaces!!!
    v = v.replace(/ /g, "");
    this.adjacencyList[v] = [];
  };

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1]) throw `Vertex "${v1}" does not exist in "${this.name}"`;
    if (!this.adjacencyList[v2]) throw `Vertex "${v2}" does not exist in "${this.name}"`;

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1]) throw `Vertex "${v1}" does not exist in "${this.name}"`;
    if (!this.adjacencyList[v2]) throw `Vertex "${v2}" does not exist in "${this.name}"`;

    this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      throw `Vertex "${v}" does not exist in "${this.name}"`;
    }

    while (this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }
    delete this.adjacencyList[v];
  }

  dfsTraverse(v) {
    if (!this.adjacencyList[v].length) return;
    let result = [];
    let visited = {};
    const dfs = (currV) => {
      if (!currV) return;

      visited[currV] = true;
      result.push(currV);
      if (this.adjacencyList[currV].length) {
        for (let i = 0; i < this.adjacencyList[currV].length; i ++) {
          if (!visited[this.adjacencyList[currV][i]]) {
            dfs(this.adjacencyList[currV][i]);
          }
        }
      }
    };
    dfs(v);
    // return result;
  }
};

let myMap = new Graph('myMap');

myMap.addVertex('Centre Hall');
myMap.addVertex('StateCollege');
myMap.addVertex('Slippery Rock');
myMap.addVertex('Toronto');
myMap.addVertex('Boston');
myMap.addVertex('New York City');
myMap.addVertex('Montreal');
myMap.addVertex('Baltimore');
myMap.addVertex('Washington DC');
myMap.addVertex('Sacramento');
myMap.addVertex('Cancun');
myMap.addVertex('Playa Del Carmen');


myMap.addEdge('CentreHall', 'StateCollege');
myMap.addEdge('CentreHall', 'SlipperyRock');
myMap.addEdge('SlipperyRock', 'Toronto');
myMap.addEdge('SlipperyRock', 'Boston');
myMap.addEdge('SlipperyRock', 'NewYorkCity');
myMap.addEdge('SlipperyRock', 'Montreal');
myMap.addEdge('CentreHall', 'Baltimore');
myMap.addEdge('Baltimore', 'Sacramento');
myMap.addEdge('Baltimore', 'WashingtonDC');
myMap.addEdge('Baltimore', 'Cancun');
myMap.addEdge('Cancun', 'PlayaDelCarmen');
myMap.addEdge('CentreHall', 'Boston');

myMap.removeVertex('Boston');

console.log(myMap);