/*
You are given two singly linked lists. The lists intersect at some node. Find, and return the node. Note: the lists are non-cyclical.

Example:

A = 1 -> 2 -> 3 -> 4
B = 6 -> 3 -> 4

This should return 3 (you may assume that any nodes with the same value are the same node).

Here is a starting point:

def intersection(a, b):
  # fill this in.

class Node(object):
  def __init__(self, val):
    self.val = val
    self.next = None
  def prettyPrint(self):
    c = self
    while c:
      print c.val,
      c = c.next

a = Node(1)
a.next = Node(2)
a.next.next = Node(3)
a.next.next.next = Node(4)

b = Node(6)
b.next = a.next.next

c = intersection(a, b)
c.prettyPrint()
# 3 4
*/

class ListNode {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

function findIntersection(l1, l2) {
  while (l1 && l2) {
    if (l1.visited) return l1.val;
    if (l2.visited) return l2.val;
    l1.visited = true;
    l2.visited = true;
    l1 = l1.next;
    l2 = l2.next;
  }
};
// for this to work - the node that is shared must be the exact same node
function test() {
  let shared = new ListNode(12);

  const l1 = new ListNode(3);
  l1.next = new ListNode(1);
  l1.next.next = new ListNode(5);
  l1.next.next.next = shared;
  l1.next.next.next.next = new ListNode(20);

  const l2 = new ListNode(51);
  l2.next = new ListNode(5);
  l2.next.next = shared;

  l2.next.next.next.next = new ListNode(14);

  console.log(findIntersection(l1, l2) === 12);
  console.log(findIntersection(l1, l2) !== 13);
  console.log(findIntersection(l1, l2) !== 20);
};

test();