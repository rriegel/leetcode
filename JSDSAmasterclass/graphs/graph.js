class Graph {
  constructor(name) {
    this.name = name;
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      throw `Vertex "${vertex}" already exists in "${this.name}"`;
    }
    vertex = vertex.replace(" ", "");
    this.adjacencyList[vertex] = [];
  };
};

let myGraph = new Graph('myGraph');

myGraph.addVertex('StateCollege');
myGraph.addVertex('Slippery Rock');
myGraph.addVertex('Baltimore');
myGraph.addVertex('Boston');

console.log(myGraph);