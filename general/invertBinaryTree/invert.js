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

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

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

function test() {

  const tree1 = new TreeNode('a');
  tree1.left = new TreeNode('b');
  tree1.right = new TreeNode('c');
  tree1.left.left = new TreeNode('d');
  tree1.left.right = new TreeNode('e');
  tree1.right.left = new TreeNode('f');

  console.log(invertTree(tree1));
};

test();