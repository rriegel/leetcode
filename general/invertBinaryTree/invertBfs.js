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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return root;
  if (root === null) return root;

  // we can traverse the tree with either with bfs or dfs
  const queue = [];

  queue.push(root)
  while (queue.length) {
      let node = queue.shift();
      let left = node.left;
      let right = node.right;
      node.left = right;
      node.right = left;

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
  }

  return root;
};