/*
You are given a binary tree representation of an arithmetic expression. In this tree, each leaf is an integer value,, and a non-leaf node is one of the four operations: '+', '-', '*', or '/'.

Write a function that takes this tree and evaluates the expression.

Example:

    *
   / \
  +    +
 / \  / \
3  2  4  5

This is a representation of the expression (3 + 2) * (4 + 5), and should return 45.
*/
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function evaluateExpressionTree(root) {
  if (!root) return 0;

  if (!root.left && !root.right) return Number(root.value);

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

  console.log(evaluateExpressionTree(root1) === 45);
};

test();