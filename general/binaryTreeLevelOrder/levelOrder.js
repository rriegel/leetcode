/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
*/
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// level order means that we need to do breadth first search
// edge case: if the root is empty return empty array
// use a queue data structure to process the nodes in the breadth first order
// put each level in an array that is then pushed into the result array
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    let levelSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      let curr = queue.shift(); // pull from from of queue
      currLevel.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(currLevel);
  }
  return result;
};