/*
All Paths for a Sum (medium)

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const TreeNode = require('./treeNode');

function findPaths(root, S) {
  allPaths = [];

  const dfs = (currNode, S, currPath, allPaths) => {
    if (currNode === null) return;

    currPath.push(currNode.val);
    if (currNode.val === S && currNode.left === null && currNode.right === null) {

      allPaths.push([...currPath]);
    } else {
      dfs(currNode.left, S - currNode.val, currPath, allPaths);
      dfs(currNode.right, S - currNode.val, currPath, allPaths);
    }
    currPath.pop();
  }

  dfs(root, S, [], allPaths);

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