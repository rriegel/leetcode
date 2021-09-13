/*
You are given the root of a binary search tree. Return true if it is a valid binary search tree, and false otherwise. Recall that a binary search tree has the property that all values in the left subtree are less than or equal to the root, and all values in the right subtree are greater than or equal to the root.

Here's a starting point:

class TreeNode:
  def __init__(self, key):
    self.left = None
    self.right = None
    self.key = key

def is_bst(root):
  # Fill this in.

a = TreeNode(5)
a.left = TreeNode(3)
a.right = TreeNode(7)
a.left.left = TreeNode(1)
a.left.right = TreeNode(4)
a.right.left = TreeNode(6)
print is_bst(a)

    5
   / \
  3   7
 / \ /
1  4 6
*/
class TreeNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
};

function validateBST(root) {

  const dfs = (node, min, max) => {
    if (!node) {
      return true;
    }
    if (node.val <= min || node.val >= max) {
      return false;
    }
    return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
  };

  return dfs(root, -Infinity, Infinity);
};

function test() {
  const tree1 = new TreeNode(5);
  tree1.left = new TreeNode(3);
  tree1.right = new TreeNode(7);
  tree1.left.left = new TreeNode(1);
  tree1.left.right = new TreeNode(4);
  tree1.right.left = new TreeNode(6);

  const tree2 = new TreeNode(5);
  tree2.left = new TreeNode(3);
  tree2.right = new TreeNode(7);
  tree2.left.left = new TreeNode(1);
  tree2.left.right = new TreeNode(8);
  tree2.right.left = new TreeNode(6);

  console.log(validateBST(tree1) === true);
  console.log(validateBST(tree2) === false);
};

test();