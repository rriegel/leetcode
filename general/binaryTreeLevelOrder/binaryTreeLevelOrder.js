/*
Given the root of a binary tree, return the level order traversal of its nodes' values.
(i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
*/
function TreeNode(val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
};

function levelOrder(root) {
  if (!root) return [];

  let levelOrder = [], queue = [root], node;

  while (queue.length) {
    let levelSize = queue.length;
    let currLevel = [];
    while (levelSize--) {
      node = queue.shift();
      currLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    levelOrder.push(currLevel);
  }
  return levelOrder;
};

function test() {

};

test();