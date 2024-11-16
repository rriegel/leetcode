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
  const dfs = (node, i) => {
      let left = node.left;
      let right = node.right;

      node.left = right;
      node.right = left;

      if (node.left) {
          dfs(node.left, i+1);
      }
      if (node.right) {
          dfs(node.right, i+1);
      }
  };
  
  dfs(root, 0);

  return root;
};