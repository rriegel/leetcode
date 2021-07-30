/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
*/
// approach - fast & slow pointer (tortoise & hare / floyd's algorithm / two pointer approach)
// most basic case of this algorithm
// while fast and fast.next is used because otherwise the node could reach the end of the list and become null
  // so in that case the loop breaks and returns false
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
    if (slow === fast) {
        return true;
    }
  }
  return false;
};