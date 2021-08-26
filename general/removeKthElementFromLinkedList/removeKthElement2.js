/*
You are given a singly linked list and an integer k. Return the linked list, removing the k-th last element from the list.

Try to do it in a single pass and using constant space.
*/
function listValPrint(head) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  if (!head) {
    console.log('[]');
  }
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}
function ListNode(val, next) {
  this.val = val || null;
  this.next = next || null;
};

function removeKthElement(head, K) {
  const dummyHead = new ListNode();
  dummyHead.next = head;
  let slow = fast = dummyHead;
  for (let i = 0; i < K; i ++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};

function test() {
  let test1 = new ListNode(1);
  test1.next = new ListNode(2);
  test1.next.next = new ListNode(3);
  test1.next.next.next = new ListNode(4);
  test1.next.next.next.next = new ListNode(5);
  listValPrint(test1);
  var result = removeKthElement(test1, 2);
  listValPrint(result);

  let test2 = new ListNode(1);
  listValPrint(test2);
  var result = removeKthElement(test2, 1);
  listValPrint(result);

  let test3 = new ListNode(1);
  test3.next = new ListNode(2);
  listValPrint(test3);
  var result = removeKthElement(test3, 2);
  listValPrint(result);
};

test();