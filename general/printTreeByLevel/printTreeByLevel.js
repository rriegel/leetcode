/*
You are given a tree, and your job is to print it level-by-level with linebreaks.

    a
   / \
  b   c
 / \ / \
d  e f  g

The output should be
a
bc
defg
*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function printByLevel(root) {
  if (!root) return null;
  let curr, res = "";
  const queue = [root];
  while (queue.length) {
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i ++) {
      curr = queue.shift();
      res += curr.val;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    if (queue.length) res += "\n";
  }
  return res;
};

function test() {
  const tree1 = new TreeNode('a');
  tree1.left = new TreeNode('b');
  tree1.right = new TreeNode('c');
  tree1.left.left = new TreeNode('d');
  tree1.left.right = new TreeNode('e');
  tree1.right.left = new TreeNode('f');
  tree1.right.right = new TreeNode('g');

  console.log(printByLevel(tree1));
  console.log(printByLevel(tree1) === "a\nbc\ndefg");
};

test();