/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0); // Dummy node to start the merged list
  let current = dummy;

  // travel till one of node reach it end
  while (l1 && l2) {
    //compare the val of 2 lists
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach any remaining nodes
  current.next = l1 || l2;

  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
