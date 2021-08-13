/*
Zigzag Traversal (medium)

Given a binary tree, populate an array to represent its zigzag level order traversal.

You should populate the values of all nodes of the first level from left to right,
then right to left for the next level and keep alternating in the same manner for the following levels.
*/
const TreeNode = require('./treeNode');

function zigzagTraverse(root) {
  if (root === null) return [];
  let L2R = true;
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift();
      if (L2R) {
        currentLevel.push(node.val);
      } else {
        currentLevel.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    };
    result.push(currentLevel);
    L2R = !L2R;
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
  root.right.left.left = new TreeNode(20);
  root.right.left.right = new TreeNode(17);
  console.log(zigzagTraverse(root));
};

test();