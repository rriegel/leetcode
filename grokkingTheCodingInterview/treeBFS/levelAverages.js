/*
Level Averages in a Binary Tree (easy)

Given a binary tree, populate an array to represent the averages of all of its levels.
*/
const TreeNode = require('./treeNode');

function levelAverages(root) {
  if (root === null) return null;

  let result = [];
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    let currentSum = 0;
    for (let i = 0; i < levelSize; i ++) {
      let currentNode = queue.shift();
      currentSum += currentNode.val;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    result.push( currentSum/levelSize );
  }
  return result;
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  root.right.left.left = new TreeNode(20);
  root.right.left.right = new TreeNode(17);
  console.log(levelAverages(root));
};

test();