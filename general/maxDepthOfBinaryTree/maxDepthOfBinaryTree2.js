// 104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let max = 0;
  const dfs = (node, depth) => {
    max = Math.max(depth, max);
    if (node.left) dfs(node.left, depth+1);
    if (node.right) dfs(node.right, depth+1);
  }
  dfs(root, 1);
  return max;
};