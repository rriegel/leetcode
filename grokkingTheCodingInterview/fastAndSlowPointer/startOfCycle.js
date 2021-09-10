/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/
class ListNode {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
};

function startOfCycle(head) {
  let cycleLength = 0;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      cycleLength = calculateCycleLength(slow);
      break;
    }
  }
  return findStart(head, cycleLength);
};

function calculateCycleLength(slow) {
  let current = slow;
  let cycleLength = 0;
  while (true) {
    current = current.next;
    cycleLength ++;
    if (current === slow) {
      break;
    }
  }
  return cycleLength;
};

function findStart(head, cycleLength) {
  let pointer1 = head, pointer2 = head;
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength --;
  }
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1.value;
};

function test() {
  const circularList = new ListNode(1);
  let node = circularList;
  let rep;
  for (let i = 2; i < 7; i ++) {
    node.next = new ListNode(i);
    if (i === 4) rep = node;
    node = node.next;
  }
  node.next = rep;

  console.log(startOfCycle(circularList)); // --> 3
};

test();