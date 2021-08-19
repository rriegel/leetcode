/*
Given a binary tree, return all root-to-leaf paths.
*/

const TreeNode = require('./treeNode');

function returnAllPaths(root) {
  if (!root) return [];

  let allPaths = [];

  const dfs = (currNode, currPath) => {
    if (!currNode) return;

    currPath.push(currNode.val);
    if (!currNode.left && !currNode.right) {
      allPaths.push(currPath.slice());
    } else {
      dfs(currNode.left, currPath);
      dfs(currNode.right, currPath);
    }
    currPath.pop();
  };
  dfs(root, []);
  return allPaths;
};

function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let result = returnAllPaths(root);
  console.log(result)
};

test();