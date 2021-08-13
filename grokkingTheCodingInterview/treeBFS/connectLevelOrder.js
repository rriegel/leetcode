/*
Connect Level Order Siblings (medium)

Given a binary tree, connect each node with its level order successor.
The last node of each level should point to a null node.
*/

class TreeNode {
  constructor(val=null) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
};

function connectLevels(root) {
  if (root === null) return null;

  let queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    let prevNode = null;
    for (let i = 0; i < levelSize; i ++) {
      let currentNode = queue.shift();
      if (prevNode !== null) {
        prevNode.next = currentNode;
      }
      prevNode = currentNode;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  return root
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  let connected = connectLevels(root);
  console.log(connected);
};

test();

/*
encountered important bug---

creating levelSize var is important because this refreshes the new size of the queue.
the while condition checks this repeatedly but the for loop may not refresh that value correctly unless explicitly declared in the var