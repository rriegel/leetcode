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

    let v1Idx = this.adjacencyList[v2].indexOf(v1);
    let v2Idx = this.adjacencyList[v1].indexOf(v2);

    this.adjacencyList[v2].splice(v1Idx, 1)
    this.adjacencyList[v1].splice(v2Idx, 1)
  }

  removeVertex(v) {
    if (!this.adjacencyList[v]) {
      throw `Vertex "${v}" does not exist in "${this.name}"`;
    }

    for (let i = 0; i < this.adjacencyList[v].length; i ++) {
      this.removeEdge(v, this.adjacencyList[v][i])
    }
    delete this.adjacencyList[v];
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

myMap.removeEdge('Cancun', 'PlayaDelCarmen');

myMap.removeVertex('Boston');

console.log(myMap);