/*
Count Paths for a Sum (medium)

Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’.
Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
*/
const TreeNode = require('./treeNode');

// we return the number of paths
function pathsThatHaveSum(root, S) {
  let result = 0, queue = [];

  const dfs = (currNode, newS, currPath) => {
    if (!currNode) return 0;

    currPath.shift(currNode.val);

    if (!currNode.left && !currNode.right) {
      if (newS === currNode.val) {
        result ++;
      }
    } else {
      dfs(currNode.left, newS-currNode.val, currPath);
      dfs(currNode.right, newS-currNode.val, currPath);
    }
    currPath.pop();
  };

  dfs(root, S, queue);

  return result;
};

function test() {
  let root = new TreeNode(6);
  root.left = new TreeNode(8);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  root.right.right.right = new TreeNode(4);
  console.log(pathsThatHaveSum(root, 18) === 2);
  console.log(pathsThatHaveSum(root, 15) === 1);
  console.log(pathsThatHaveSum(root, 14) === 0);
};

test();