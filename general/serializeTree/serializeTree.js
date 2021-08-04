/*
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

function TreeNode(val, left=null, right=null) {
  this.val = val;
  this.left = left;
  this.right = right;
};

function serialize(root) {
  // pre order
  var recur = function(str, node) {
    if (!node) {
      return str += 'null,';
    }
    str = str + node.val + ',';
    str = recur(str, node.left);
    str = recur(str, node.right);

    return str;
  }
  return recur('', root);
};

function deserialize(s) {
  var list = s.split(',');
  var recur = function(list) {
    if(list[0] === 'null') {
      list.shift();
      return null;
    }
    var node = new TreeNode(list[0]);
    list.shift();
    node.left = recur(list);
    node.right = recur(list);
    return node;
  }
  return recur(list);
};

let node = new TreeNode('root', new TreeNode('left', new TreeNode('left.left')), new TreeNode('right'));
let serialized = serialize(node);
console.log(serialized);
console.log(deserialize(serialized));