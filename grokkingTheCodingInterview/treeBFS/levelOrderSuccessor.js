/*
Level Order Successor (easy)

Given a binary tree and a node, find the level order successor of the given node in the tree.
The level order successor is the node that appears right after the given node in the level order traversal.
*/

class TreeNode {
  constructor(val = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
};

// follow level Traversal pattern but just find the target node and return the next one
function levelOrderSuccessor(root, target) {
  if (root === null || target === null) {
    return null;
  }

  let queue = [root];
  let returnNext = false;
  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift();
      if (returnNext) return node;
      if (node.val === target) returnNext = true;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return null;
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(levelOrderSuccessor(root, 12).val === 7);
  console.log(levelOrderSuccessor(root, 9).val === 10);
  console.log(levelOrderSuccessor(root, 5) === null);
};

test();