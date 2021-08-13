/*
Find the largest value on each level of a binary tree.
*/

const TreeNode = require('./treeNode');

function levelMax(root) {
  if (root === null) return null;
  let result = [];
  let queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    let levelMax = null;
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift();
      if (levelMax === null) levelMax = node.val;
      else levelMax = Math.max(levelMax, node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(levelMax);
  }
  return result;
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(11);
  root.right.right = new TreeNode(5);
  root.right.left.left = new TreeNode(20);
  root.right.left.right = new TreeNode(17);
  console.log(levelMax(root));
};

test();