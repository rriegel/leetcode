/*
Invert a binary tree.

For example, given the following tree:
    a
   / \
  b   c
 / \  /
d   e f

should become:
  a
 / \
 c  b
 \  / \
  f e  d

*/

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
};

function invert(root) {
  if (!root) return null;

  const dfs = (node) => {
    if (!node) return;
    else {
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      dfs(node.left);
      dfs(node.right);
    }
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

  console.log(invert(tree1));
};

test();