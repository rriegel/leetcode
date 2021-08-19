/*
All Paths for a Sum (medium)

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const TreeNode = require('./treeNode');

function findPaths(root, S) {
  if (!root) return [];
  allPaths = [];

  const dfs = (currNode, S, currPath) => {
    if (currNode === null) return;

    currPath.push(currNode.val);
    if (currNode.val === S && currNode.left === null && currNode.right === null) {
      // ES6 spread operator creates a copy of an array (same as arr.slice())
      // this is necessary because the currPath array is reused through the call stack
      allPaths.push([...currPath]);
    } else {
      dfs(currNode.left, S - currNode.val, currPath, allPaths);
      dfs(currNode.right, S - currNode.val, currPath, allPaths);
    }
    currPath.pop();
  }

  dfs(root, S, []);

  return allPaths;
};


function test() {
  let root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let result = findPaths(root, 23);
  console.log(result)
};

test();