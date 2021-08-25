/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Example 3:
Input: root = []
Output: 0

Example 4:
Input: root = [0]
Output: 1
*/

function TreeNode(val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
};

var maxDepth = function(root) {
  if (!root) return 0;
  let maxDepth = 1;
  const dfs = (node, currDepth) => {
    if (!node.left && !node.right) {
      maxDepth = Math.max(maxDepth, currDepth);
    }
    if (node.left) dfs(node.left, currDepth+1);
    if (node.right) dfs(node.right, currDepth+1);
  };
  dfs(root, maxDepth);
  return maxDepth;
};