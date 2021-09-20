/*
Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).
*/

class TreeNode {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
};

function evaluateExpressionTree(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return (Number(root.value));

  const leftSum = evaluateExpressionTree(root.left);
  const rightSum = evaluateExpressionTree(root.right);

  if (root.value === '+') {
    return leftSum + rightSum;
  } else if (root.value === '-') {
    return leftSum - rightSum;
  } else if (root.value === '*') {
    return leftSum * rightSum;
  } else {
    return leftSum / rightSum;
  }
};

function test() {
  const root1 = new TreeNode('*');
  root1.left = new TreeNode('+');
  root1.right = new TreeNode('+');
  root1.left.left = new TreeNode(3);
  root1.left.right = new TreeNode(2);
  root1.right.left = new TreeNode(4);
  root1.right.right = new TreeNode(5);

  console.log(evaluateExpressionTree(root1)); // --> 45
};

test();