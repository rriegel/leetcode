
// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {

  let head = new ListNode();
  let node = head;
  // define carry in outer context because we need to know if there is a carry after the loop
  let carry = 0;

  // traversal of lists
  while (l1 || l2) {
      let l1Value = l1 ? l1.val : 0;
      let l2Value = l2 ? l2.val : 0;

      let sum = l1Value + l2Value + carry;
      carry = 0;
      let newVal = sum;

      if (sum > 9) {
          newVal = sum % 10;
          carry = 1;
      }

      node.next = new ListNode(newVal);
      node = node.next;

      if (l1) {
          l1 = l1.next
      }
      if (l2) {
          l2 = l2.next
      }
  }
  if (carry) {
      node.next = new ListNode(carry);
  }

  return head.next;
};

export default addTwoNumbers;