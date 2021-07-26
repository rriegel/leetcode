import * as fns from './mergeSortedLists.js';

let l1 = new fns.ListNode(1);
let head1 = l1;

let l2 = new fns.ListNode(3);
let head2 = l2;

head1.next = new fns.ListNode(2)
head2.next = new fns.ListNode(4)

head1 = head1.next;
head2 = head2.next;

head1.next = new fns.ListNode(5)

function test() {
  console.log(fns.mergeTwoLists(l1, l2));
};

test();