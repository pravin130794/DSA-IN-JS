/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;

  // 2nd approach
  // let curr = head;
  // let prev = null;
  // while (curr) {
  //     let nextNode = curr.next;
  //     curr.next = prev;
  //     prev = curr;
  //     curr = nextNode;
  // }

  // return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]));
