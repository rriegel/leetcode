/*
Zigzag Traversal (medium)

Given a binary tree, populate an array to represent its zigzag level order traversal.

You should populate the values of all nodes of the first level from left to right,
then right to left for the next level and keep alternating in the same manner for the following levels.
*/
const TreeNode = require('./treeNode');

function zigzagTraverse(root) {
  if (!root) return null;

  let zigZag = [];
  let queue = [];
  let currNode;

  queue.push(root);
  let flip = false;
  while (queue.length) {
    let levelSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      currNode = queue.shift();
      if (flip) {
        currLevel.unshift(currNode.val);
      } else {
        currLevel.push(currNode.val);
      }
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    zigZag.push(currLevel);
    flip = !flip;
  };

  return zigZag;
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
  console.log(zigzagTraverse(root));
};

test();