const {ListNode, mergeTwoLists} = require('./mergeSortedLists');

let l1 = new ListNode(1);
let head1 = l1;

let l2 = new ListNode(3);
let head2 = l2;

head1.next = new ListNode(2)
head2.next = new ListNode(4)

head1 = head1.next;
head2 = head2.next;

head1.next = new ListNode(5)

function test() {
  console.log(l1);
  console.log(mergeTwoLists(l1, l2));
};

test();