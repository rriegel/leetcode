/*
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/
class ListNode {
  constructor(val = null) {
    this.val = val;
    this.next = null;
    this.visited = false;
  }
}
// add a "visited" property to the nodes as you pass them -> the one that already has a visited prop means that is the intersection point
function findIntersection(l1, l2) {
  let shared;
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
};

test();