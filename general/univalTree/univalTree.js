/*
A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

class BinaryTree {
  constructor() {
    this.root = null;
  };
  // dfs approach with bottom-up recursion (most recursion is top-down)
  countUnivalTrees() {
    if (this.root === null) return 0;
    let count = 0;
    const dfs = (node) => {
      if (node.left === null && node.right === null) {
        count ++;
        return true;
      }
      let isUnival = true;
      if (node.left) {
        let left = dfs(node.left);
        isUnival = left && isUnival && node.value === node.left.value;
      }
      if (node.right) {
        let right = dfs(node.right);
        isUnival = right && isUnival && node.value === node.right.value;
      }
      if (isUnival) count ++;
      return isUnival;
    }
    dfs(this.root);
    return count;
  };
}

function test() {
  const tree = new BinaryTree();
  tree.root = new TreeNode(0);
  tree.root.left = new TreeNode(1);
  tree.root.right = new TreeNode(0);
  tree.root.right.right = new TreeNode(0);
  tree.root.right.left = new TreeNode(1);
  tree.root.right.left.left = new TreeNode(1);
  tree.root.right.left.right = new TreeNode(1);

  console.log(tree.countUnivalTrees() === 5);

};

test();
