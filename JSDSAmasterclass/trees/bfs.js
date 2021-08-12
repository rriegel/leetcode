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

  BFS() {
    if (this.root === null) return [];
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }

  DFSpreorder() {
    let data = [];
    var dfs = (node) => {
      data.push(node.value);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }
    dfs(this.root);
    return data;
  }

  DFSpostorder() {
    let data = [];
    var dfs = (node) => {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
      data.push(node.value);
    };
    dfs(this.root);
    return data;
  }

  DFSinorder() {
    let data = [];
    var dfs = (node) => {
      if (node.left) dfs(node.left);
      data.push(node.value);
      if (node.right) dfs(node.right);
    };
    dfs(this.root);
    return data;
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
// console.log(tree.BFS());
// console.log(tree.DFSpreorder());
// console.log(tree.DFSpostorder());
console.log(tree.DFSinorder());