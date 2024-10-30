/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
find the middle node of list
odd nodes : let right side list is smaller (1 -> 2 -> 3 -> 2 -> 1 )
reverse the second half list
compare the val of first and second lists
 */
var isPalindrome = function (head) {
  let [slow, fast] = [head, head];

  if (slow.next == null) return true;
  // find the middle node of list
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // odd nodes : let right side list is smaller (1 -> 2 -> 3 -> 2 -> 1 )
  if (fast != null) {
    slow = slow.next;
  }

  // reverse the second half list
  slow = reverseList(slow);
  fast = head;

  //compare the val of lists
  while (slow != null) {
    if (fast.val != slow.val) {
      return false;
    } else {
      slow = slow.next;
      fast = fast.next;
    }
  }
  return true;
};

var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

console.log(isPalindrome([1, 2, 2, 1]));
