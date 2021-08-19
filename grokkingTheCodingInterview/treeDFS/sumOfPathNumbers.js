/*
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.
*/

const TreeNode = require('./treeNode');

function sumOfPathNumbers(root) {
  if (root === null) return 0;

  let sum = 0;

  const dfs = (currNode, currSum, currPath) => {
    if (currNode === null) return;

    currPath.push(currNode.val);

    currSum = currSum * 10 + currNode.val;

    if (!currNode.left && !currNode.right) {
      sum += currSum;
    } else {
      dfs(currNode.left, currSum, currPath);
      dfs(currNode.right, currSum, currPath);
    }
    currPath.pop();
  };

  dfs(root, 0, []);
  return sum;
};

function test() {
  let root = new TreeNode(6);
  root.left = new TreeNode(8);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  let result = sumOfPathNumbers(root);
  console.log(result === 1955)
};

test();