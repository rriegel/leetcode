class ListNode {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  }
};

function reverseLinkedList(list) {
  let prev = null, current = list, temp;

  while (current !== null) {
    temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};

function test() {
  let newNode = new ListNode(1);
  newNode.next = new ListNode(2);
  newNode.next.next = new ListNode(4);
  newNode.next.next.next = new ListNode(5);
  let newList = new LinkedList();
  newList.head = newNode;

  // console.log(reverseLinkedList(newList.head));

  newList = new LinkedList();
  let current;
  for (let i = 0; i < 10; i += 2) {
    newNode = new ListNode(i);
    if (newList.head === null) {
      newList.head = newNode;
      current = newList.head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }

  console.log(reverseLinkedList(newList.head));
};

test();