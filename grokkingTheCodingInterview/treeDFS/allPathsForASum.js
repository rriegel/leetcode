/*
All Paths for a Sum (medium)

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const TreeNode = require('./treeNode');

function findPaths(root, S) {
  if (root === null) return 0;
  if (root.val === S && !root.left && !root.right) return 1;
  return findPaths(root.left, S - root.val) + findPaths(root.right, S - root.val);
};

function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.left.right = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.right.right.left = new TreeNode(5);
  console.log(findPaths(root, 28));
  console.log(findPaths(root, 23));
};

test();