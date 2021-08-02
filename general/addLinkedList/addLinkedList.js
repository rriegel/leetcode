/*
You are given two linked-lists representing two non-negative integers.

The digits are stored in reverse order and each of their nodes contain a single digit.

Add the two numbers and return it as a linked list.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val = null, next = null) {
  this.val = val;
  this.next = next;
};

function addTwoNumbers(l1, l2) {
  let res = new ListNode();
  let node = res;
  let carry = 0;
  while (l1 || l2) {
    let l1val = l1 ? l1.val : 0;
    let l2val = l2 ? l2.val : 0;

    let sum = l1val + l2val + carry;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    }

    node.next = new ListNode(sum);
    node = node.next;
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
        l2 = l2.next
    }
  }
  if (carry > 0) {
    node.next = new ListNode(carry);
  }
  return res.next;
};

function test() {
  let l1 =
    new ListNode(1,
      new ListNode(2,
        new ListNode(3)
      )
    );
  let l2 =
    new ListNode(7,
      new ListNode(8,
        new ListNode(9)
      )
    );
  console.log(addTwoNumbers(l1, l2));
}

test();