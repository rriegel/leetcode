/*
Minimum Depth of a Binary Tree (easy)

Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
*/

const TreeNode = require('./treeNode');

// this is a bfs problem because you can easily keep track of the levels that you are traversing in the tree;
function minimumDepth(root) {
  let queue = [root];
  let result = 0;
  while (queue.length) {
    let levelSize = queue.length;
    result ++;
    for (let i = 0; i < levelSize; i ++) {
      let node = queue.shift();
      if (!node.left && !node.right) {
        return result;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
};

function test() {
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(1);
  root.left.left = new TreeNode(9);
  console.log(minimumDepth(root) === 2);

  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(minimumDepth(root) === 3);
};

test();