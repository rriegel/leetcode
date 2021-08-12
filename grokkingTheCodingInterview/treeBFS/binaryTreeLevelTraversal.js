/*
Binary Tree Level Order Traversal (easy)

Given a binary tree, populate an array to represent its level-by-level traversal.
You should populate the values of all nodes of each level from left to right in separate sub-arrays.
*/

class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

function traverse(root) {
  let result = [];
  if (root === null) {
    return result;
  }

  let queue = [];
  let node = root;

  queue.push(node);
  while (queue.length) {
    const levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      node = queue.shift();
      currentLevel.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
debugger;
console.log(traverse(root));