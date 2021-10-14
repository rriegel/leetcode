/*
A k-ary tree is a tree with k-children, and a tree is symmetrical if the data of the left side of the tree is the same as the right side of the tree.

Here's an example of a symmetrical k-ary tree.
        4
     /     \
    3        3
  / | \    / | \
9   4  1  1  4  9
Given a k-ary tree, figure out if the tree is symmetrical.

Here is a starting point:

class Node():
  def __init__(self, value, children=[]):
    self.value = value
    self.children = children

def is_symmetric(root):
  # Fill this in.

tree = Node(4)
tree.children = [Node(3), Node(3)]
tree.children[0].children = [Node(9), Node(4), Node(1)]
tree.children[1].children = [Node(1), Node(4), Node(9)]
print is_symmetric(tree)
# True
*/
class TreeNode {
  constructor(value, children=[]) {
    this.value = value;
    this.children = children;
  }
}
// tree is symmetric if the data on the left side is the same as the data on the right side
// we can use breadth first search to assemble the nodes at each level and check if they're symmetric at a level basis

function isSymmetric(root) {
  if (!root) return false;
  const queue = [root];
  let level = 0;

  while (queue.length) {
    // check if queue is symmetrical
    if (level > 0) {
      // two pointer approach to check if symmetric
      let s = 0, e = queue.length-1;
      while (s < e) {
        if (queue[s].value !== queue[e].value) return false;
        s ++;
        e --;
      }
    }
    // add nodes into the queue
    let levelSize = queue.length;
    level ++;
    for (let i = 0; i < levelSize; i ++) {
      let currNode = queue.shift();
      for (let child of currNode.children) {
        queue.push(child);
      }
    }
  }
  return true;
};

function test() {
  const tree = new TreeNode(4);
  tree.children = [new TreeNode(3), new TreeNode(3)];
  tree.children[0].children = [new TreeNode(9), new TreeNode(4), new TreeNode(1)];
  tree.children[1].children = [new TreeNode(1), new TreeNode(4), new TreeNode(9)];

  console.log(isSymmetric(tree) === true);

  const tree2 = new TreeNode(4);
  tree2.children = [new TreeNode(3), new TreeNode(3)];
  tree2.children[0].children = [new TreeNode(9), new TreeNode(4), new TreeNode(1)];
  tree2.children[1].children = [new TreeNode(1), new TreeNode(4), new TreeNode(7)];

  console.log(isSymmetric(tree2) === false);
};

test();