/*
Binary Tree Level Order Traversal (easy)

Given a binary tree, populate an array to represent its level-by-level traversal.
You should populate the values of all nodes of each level from left to right in separate sub-arrays.
*/
const TreeNode = require('./treeNode');

function traverse(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [];
  queue.push(root);

  while (queue.length) {
    let currentLevel = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i ++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }
  return result;
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(traverse(root));
};

test();