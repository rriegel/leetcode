/*
Given a binary tree, find the root-to-leaf path with the maximum sum.
*/

const TreeNode = require('./treeNode');

function pathWithMaxSum(root) {
  if (!root) return 0;

  let max = 0;
  let maxPath = [];
  const dfs = (currNode, currSum, currPath) => {
    if (!currNode) return;

    currPath.push(currNode.val);
    currSum += currNode.val;

    if (!currNode.left && !currNode.right) {
      if (currSum > max) {
        maxPath = currPath.slice();
        max = currSum;
      }
    } else {
      dfs(currNode.left, currSum, currPath);
      dfs(currNode.right, currSum, currPath);
    }
    currPath.pop();
  };
  dfs(root, 0, []);
  return maxPath;
};

function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(8);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(1);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let result = pathWithMaxSum(root);
  console.log(result)
};

test();