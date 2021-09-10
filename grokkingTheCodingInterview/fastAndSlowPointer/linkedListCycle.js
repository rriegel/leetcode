/*
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
*/
class ListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
};
// time - O(n)
// space - O(1)
function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

function test() {
  const circularList = new ListNode(1);
  let node = circularList;
  let rep;
  for (let i = 2; i < 7; i ++) {
    node.next = new ListNode(i);
    node = node.next;
    if (i === 3) rep = node;
  }
  node.next = rep;

  console.log(hasCycle(circularList));
};

test();