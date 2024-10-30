/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
brute forace
using hashSet
optimize solution with take differance and comapre
 */

/**
    Brute force apprach
*/

// var getIntersectionNode = function(headA, headB) {
//     let currentA = headA;

//   while (currentA) {
//     let currentB = headB;
//     while (currentB) {
//       if (currentA === currentB) {
//         return currentA;
//       }
//       currentB = currentB.next;
//     }
//     currentA = currentA.next;
//   }

//   return null;
// };

// using hasSet()
// var getIntersectionNode = function (headA, headB) {
//     const nodesSeen = new Set();
//     let currentA = headA;

//     // Add all nodes from listA to the set
//     while (currentA) {
//         nodesSeen.add(currentA);
//         currentA = currentA.next;
//     }

//     // Check if any node in listB is in the set
//     let currentB = headB;
//     while (currentB) {
//         if (nodesSeen.has(currentB)) {
//             return currentB;
//         }
//         currentB = currentB.next;
//     }

//     return null;
// }

// optimize solution
// var getIntersectionNode = function (headA, headB) {
//     if (!headA || !headB) return null;

//     let pA = headA;
//     let pB = headB;

//     // Traverse both lists, switching to the other list at the end
//     while (pA !== pB) {
//         pA = pA ? pA.next : headB;
//         pB = pB ? pB.next : headA;
//     }

//     return pA;
// }

var getIntersectionNode = function (headA, headB) {
  // calculate the length of node of each linklist
  let lenA = getLinkedListLength(headA);
  let lenB = getLinkedListLength(headB);

  // check length of list A is greater than list B then move head of A til diff of both nodes
  while (lenA > lenB) {
    lenA--;
    headA = headA.next;
  }

  while (lenB > lenA) {
    lenB--;
    headB = headB.next;
  }

  // Now both heads are the same distances of intersection
  // start moving then utill they meet
  while (headA != headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};

function getLinkedListLength(head) {
  let length = 0;
  let current = head;

  while (current) {
    length++;
    current = current.next;
  }

  return length;
}

console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4]));
