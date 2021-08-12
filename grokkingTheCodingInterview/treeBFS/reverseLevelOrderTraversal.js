/*
Reverse Level Order Traversal (easy)

Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first.
You should populate the values of all nodes in each level from left to right in separate sub-arrays.
*/
const TreeNode = require('./treeNode');

// this is exactly the same as normal level traversal except that the currentLevel is unshifted to the front of the result array instead of pushed to the back

// this function runs in linear time O(n) where n is the number of nodes in the tree
// this function has an O(n) space complexity too because the array returns all of the node values in the tree
function reverseTraverse(root) {
  if (root === null) return [];

  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let levelSize = queue.length;
    let currentLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      let currNode = queue.shift();
      currentLevel.push(currNode.val);
      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.unshift(currentLevel);
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
  console.log(reverseTraverse(root));
};

test();

/*
bug encountered:
when line 19 was put on the outside of the for-loop,
repeated values were in the result array

this must have pushed more nodes into the queue than necessary
i'm not sure how to explain why exactly
*/