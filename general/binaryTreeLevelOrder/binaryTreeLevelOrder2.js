/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  // level order traversal would require bfs
  if (!root) return [];

  let levelOrderTraversal = [];
  let queue = [];

  queue.push(root);
  
  while (queue.length) {
      let levelSize = queue.length;
      // while we're looping through the queue, we need to create an array
      // for the current level,
      // then push all values in the queue to the array
      let currLevel = [];
      for (let i = 0; i < levelSize; i ++) {
          let currNode = queue.shift();
          currLevel.push(currNode.val);
          if (currNode.left) queue.push(currNode.left);
          if (currNode.right) queue.push(currNode.right);
      }
      levelOrderTraversal.push(currLevel)
  }

  return levelOrderTraversal;
};