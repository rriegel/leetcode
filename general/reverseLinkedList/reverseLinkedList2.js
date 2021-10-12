/*
Given the head of a singly linked list, reverse it in-place.
*/
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// linear time, constant space
function reverse(head) {
  let prev = null, temp;

  while (head) {
    // reverse pointers
    temp = head.next;
    head.next = prev;
    // slide pointers
    prev = head;
    head = temp;
  }

  return prev;
};

function test() {
  let head1 = new ListNode(1);
  let curr = head1;
  for (let i = 2; i <= 5; i ++) {
    curr.next = new ListNode(i);
    curr = curr.next;
  }
  console.log(head1);
  console.log(reverse(head1));
};

test();