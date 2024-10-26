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
  if (!listsArr) return [];
  if (listsArr.length === 0) return [];
  if (listsArr.length === 1) {
    if (listsArr[0].val) {
      return listsArr[0];
    } else {
      return [];
    }
  }
  // merge 2 lists and push that merged list onto the array
  // do this until listsArray.length === 1
  // this works because the mergeTwoLists will keep the lists sorted and merge them 1 by 1
  // so this is a divide and conquer type solution
  while (listsArr.length > 1) {
    const list1 = listsArr.shift();
    const list2 = listsArr.shift();
    const merged = mergeTwoLists(list1, list2);
    listsArr.push(merged);
  }
  // return merged list
  return listsArr[0];
};

function mergeTwoLists(l1, l2) {
  let l3 = new ListNode(0);
  let curr = l3;
  // while both lists are not empty, merge in the node with the lowest value between the two
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
  // if there are any trailing lengths to either list, merge those nodes in
  if (l1) curr.next = l1;
  if (l2) curr.next = l2;
  
  return l3.next;
};

function flatten(head) {
  const values = [];
  let currentNode = head;

  while (currentNode !== null) {
    values.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return values;
};

function test() {
  const list1 = new ListNode(1, new ListNode(4, new ListNode(5, null)));
  const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
  const list3 = new ListNode(2, new ListNode(6, null));

  const res1 = mergeKSortedLists([list1, list2, list3]);
  console.log("res1");
  console.log(res1);
  console.log(flatten(res1));
  const res2 = mergeKSortedLists([]);
  console.log("res2");
  console.log(res2);
  const res3 = mergeKSortedLists([new ListNode(null, null)]);
  console.log("res3");
  console.log(res3);
  const res4 = mergeKSortedLists([new ListNode(0)]);
  console.log("res4");
  console.log(res4);
};

test();