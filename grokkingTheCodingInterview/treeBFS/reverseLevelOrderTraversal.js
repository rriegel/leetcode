/*
Reverse Level Order Traversal (easy)

Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
You should populate the values of all nodes in each level from left to right in separate sub-arrays.
*/
const TreeNode = require('./treeNode');

function reverseTraverse(root) {
  if (root === null) return [];

  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(currentLevel);
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
  console.log(reverseTraverse(root));
};

test();