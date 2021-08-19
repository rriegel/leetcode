/*
Path With Given Sequence (medium)

Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
*/
const TreeNode = require('./treeNode');

function findPath(root, sequence) {
  if (!root) return false;

  const dfs = (currNode, seqIdx) => {
    if (!currNode) return false;

    if (currNode.val === sequence[seqIdx]) {
      if (!currNode.left && !currNode.right && seqIdx === sequence.length-1) {
        return true;
      } else {
        seqIdx ++;
        return dfs(currNode.left, seqIdx) || dfs(currNode.right, seqIdx);
      }
    }
    return false;
  };

  return dfs(root, 0);
};

function test() {
  let root = new TreeNode(6);
  root.left = new TreeNode(8);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(5);
  console.log(findPath(root, [6,8,4]));
  console.log(findPath(root, [6,3,6]));
  console.log(findPath(root, [6,3,5]));
  console.log(findPath(root, [6,4,5,8]) === false);
};

test();