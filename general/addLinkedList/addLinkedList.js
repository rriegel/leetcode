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
  let carry;
  while (l1 && l2) {
    carry = 0;
    let sum = l1.val + l2.val;

    if (sum > 9) {
      let tmp = sum.toString();
      carry = Number(tmp.substring(0, tmp.length - 1));
      sum = sum % 10;
    }
    node.val = node.val + sum;
    node.next = new ListNode(carry);

    node = node.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (carry > 0) {
    node.val = carry;
  }
  return res;
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