/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(data) {
    const NewNode = new Node(data, this.head);
    this.head = NewNode;
    if (!this.tail) this.tail = NewNode;
    this.length++;
  }

  append(data) {
    const NewNode = new Node(data, null);
    if (!this.head) {
      this.head = NewNode;
    }

    let currNode = this.tail;
    if (currNode) {
      currNode.next = NewNode;
    }
    this.tail = NewNode;

    this.length++;
  }
  printData() {
    let array = "";
    let currNode = this.head;
    while (currNode) {
      array += `${currNode.value} --> `;
      currNode = currNode.next;
    }
    return `${array}null`;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

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
  while (headA.value != headB.value) {
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

const LinkedList1 = new LinkedList();
const LinkedList2 = new LinkedList();
LinkedList1.append(4);
LinkedList1.append(1);
LinkedList1.append(8);
LinkedList1.append(4);
LinkedList1.append(5);

LinkedList2.append(5);
LinkedList2.append(6);
LinkedList2.append(1);
LinkedList2.append(8);
LinkedList2.append(4);
LinkedList2.append(5);

let showAfter = LinkedList1.printData(
  getIntersectionNode(LinkedList1.head, LinkedList2.head)
);
console.log("🚀 ~ showAfter:", showAfter);
