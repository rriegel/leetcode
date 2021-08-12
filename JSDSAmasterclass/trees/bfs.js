/*
implement BFS on a binary tree
*/

/*
inserting into a binary search tree
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this.root = null;
  };

  insert(value) {
    var newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  };

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (current !== null) {
      if (value === current.value) {
        return current;
      }
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left
      }
    }
    return false;
  };

  bfs() {
    if (this.root === null) return [];
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let next = queue.shift();
      visited.push(next.value);
      if (next.left) {
        queue.push(next.left);
      }
      if (next.right) {
        queue.push(next.right);
      }
    }
    return visited;
  }
};

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(200);
tree.insert(13);
tree.insert(17);
tree.insert(6);
tree.insert(3);
tree.insert(3);
console.log(tree);
console.log(tree.bfs());