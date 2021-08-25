/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal,
each group of children is separated by the null value (See examples).


Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]


Constraints:

The height of the n-ary tree is less than or equal to 1000
The total number of nodes is between [0, 104]
*/
const {performance} = require('perf_hooks');

// node class definition
function Node (val,children=[]) {
  this.val = val;
  this.children = children;
};

// first solution
// time complexity if O(n) because we are only visiting each node once
var levelOrder = function(root) {
  if (!root) return [];

  let queue = [root];
  let levelOrder = [];
  let node;
  while (queue.length) {
    let levelSize = queue.length;
    let currLevel = [];
    for (let i = 0; i < levelSize; i ++) {
      node = queue.shift();
      currLevel.push(node.val);
      if (node.children.length) {
        for (let j = 0; j < node.children.length; j ++) {
          queue.push(node.children[j]);
        }
      }
    }
    levelOrder.push(currLevel);
  }
  return levelOrder;
};

function test() {
  let root = new Node(12);
  root.children.push(new Node(6));
  root.children.push(new Node(9));
  root.children.push(new Node(3));
  root.children[0].children.push(new Node(2));
  root.children[0].children.push(new Node(4));
  root.children[1].children.push(new Node(7));
  root.children[1].children.push(new Node(8));
  root.children[2].children.push(new Node(1));
  root.children[2].children[0].children.push(new Node(11));

  console.log(levelOrder(root));

  let t1 = performance.now();
  levelOrder(root);
  let t2 = performance.now();

  console.log(`Performed function in ${t2-t1} ms`)
};

test();