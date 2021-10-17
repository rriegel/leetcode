// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/

function mergeTwoLists(l1, l2) {
  if (!l1) {return l2}
  if (!l2) {return l1}
  let l3 = new ListNode();
  let head = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }
    head = head.next;
  }
  head.next = l1 || l2;
  return l3.next;
};

module.exports = {ListNode, mergeTwoLists};