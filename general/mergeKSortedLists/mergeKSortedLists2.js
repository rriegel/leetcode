/*
You are given an array of k linked-lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

function mergeKSortedLists(listsArr) {

}

function test() {
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
  const list3 = new ListNode(2, new ListNode(6, null));

  const res1 = mergeKSortedLists([list1, list2, list3]);

  const res2 = mergeKSortedLists([]);

  const res3 = mergeKSortedLists(new ListNode(null, null));
};

test();