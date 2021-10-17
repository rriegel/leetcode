/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

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

/* merged lists 2 at a time until there is only 1 list left */

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    let mergedAB = mergeTwo(a, b);
    lists.push(mergedAB);
  }
  return lists[0];
};

var mergeTwo = function(l1, l2) {
  let l3 = new ListNode(0);
  let curr = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) curr.next = l1;
  else if (l2) curr.next = l2;
  return l3.next;
};