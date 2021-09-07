/*
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// go through each level in dfs manner and reassign node.left and node.right
// tried BFS approach but DFS worked much better
var invertTree = function(root) {

  const dfs = (node) => {
    if (!node) return;
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    dfs(node.left);
    dfs(node.right);
  };

  dfs(root);

  return root;
};