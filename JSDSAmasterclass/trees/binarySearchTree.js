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

console.log(tree.find(5));
console.log(tree.find(3));
console.log(tree.find(7));