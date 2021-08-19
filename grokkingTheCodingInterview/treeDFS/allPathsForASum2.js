/*
All Paths for a Sum (medium)

Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
*/
const TreeNode = require('./treeNode');


// O(n^2) quadratic time complexity because we have to traverse and store the path for each node
  // the storing is its own operation but that has to happen at every node
// O(n^2) quadratic complexity because of allPaths and recursion call stack
function findPaths(root, S) {
  if (!root) return [];

  allPaths = [];

  const dfs = (currNode, S, currPath) => {
    if (currNode === null) return;

    currPath.push(currNode.val);

    if (currNode.val === S && !currNode.left && !currNode.right) {
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