/*
Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

    a
   / \
  b   c
 /
d
*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function deepestNode(root) {
  if (!root) return null;
  let deepest = null;
  let deepestLevel = 0;
  const dfs = (node, level) => {
    if (!node.left && !node.right) {
      if (level > deepestLevel) {
        deepest = node.val;
        deepestLevel = level;
      }
    } else {
      if (node.left) dfs(node.left, level + 1);
      if (node.right) dfs(node.right, level + 1);
    }
  };
  dfs(root, 1);
  return deepest;
};

function test() {
  let root1 = new TreeNode('a');
  root1.left = new TreeNode('b');
  root1.right = new TreeNode('c');
  root1.left.left = new TreeNode('d');

  console.log(deepestNode(root1) === 'd');
};

test();