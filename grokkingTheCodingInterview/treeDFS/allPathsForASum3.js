/*
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const TreeNode = require('./treeNode');

function pathsThatAddToS(root, S) {
  let result = [];
  let stack = [];

  const dfs = (currNode, newS, currPath) => {
    if (!currNode) return;
    currPath.push(currNode.val);

    console.log(currPath);

    if (!currNode.left && !currNode.right) {
      if (newS === currNode.val) {
        result.push([...currPath]);
      }
    } else {
      dfs(currNode.left, newS-currNode.val, currPath);
      dfs(currNode.right, newS-currNode.val, currPath);
    }
    currPath.pop();
  };

  dfs(root, S, stack);

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
  console.log(pathsThatAddToS(root, 18));
  // console.log(pathsThatAddToS(root, 15));
  // console.log(pathsThatAddToS(root, 14));
};

test();