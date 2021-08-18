/*
Binary Tree Path Sum (easy)

Given a binary tree and a number ‘S’, find if the tree has a path
from root-to-leaf such that the sum of all the node values of that path equals ‘S’.
*/
const TreeNode = require('./treeNode');

function hasPathWithSum(root, S) {
  if (root === null) return false; /* this base case gets hit when recursive call reaches left node */
  if (root.val === S && !root.left && !root.right) return true;
  return hasPathWithSum(root.left, S - root.val) || hasPathWithSum(root.right, S - root.val);
};

function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(hasPathWithSum(root, 23));
  console.log(hasPathWithSum(root, 16));
  console.log(hasPathWithSum(root, 18));
};

test();