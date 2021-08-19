/*
Given a binary tree, find the root-to-leaf path with the maximum sum.
*/

const TreeNode = require('./treeNode');

function pathWithMaxSum(root) {
  if (!root) return 0;

  let max = 0;
  let pathSum = 0;
  let maxPath = [];
  const dfs = (currNode, currPath) => {
    if (!currNode) return;

    currPath.push(currNode.val);
    pathSum += currNode.val;

    if (!currNode.left && !currNode.right) {
      if (pathSum > max) {
        maxPath = currPath.slice();
        max = pathSum;
        pathSum = 0;
      }
    } else {
      dfs(currNode.left, currPath);
      dfs(currNode.right, currPath);
    }
    currPath.pop();
  };
  dfs(root, []);
  return maxPath;
};

function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(8);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let result = pathWithMaxSum(root);
  console.log(result)
};

test();