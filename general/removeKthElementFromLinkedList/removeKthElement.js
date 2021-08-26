/*
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

var removeNthFromEnd = function(head, n) {
  const nullHead = new ListNode(null);
  nullHead.next = head;

  let slow = nullHead, fast = nullHead;

  for (let i = 0; i < n; i ++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  };
  slow.next = slow.next.next;
  return nullHead.next;
};