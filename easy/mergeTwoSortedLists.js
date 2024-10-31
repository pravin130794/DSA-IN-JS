/**
 * Definition for singly-linked list.
 * function Node(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
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
  printData(head) {
    let array = "";
    let currNode = head;
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
 * @param {Node} list1
 * @param {Node} list2
 * @return {Node}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new Node(0); // Dummy node to start the merged list
  let current = dummy;

  // travel till one of node reach it end
  while (l1 && l2) {
    //compare the val of 2 lists
    if (l1.value < l2.value) {
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

const LinkedList1 = new LinkedList();
const LinkedList2 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(4);

LinkedList2.append(1);
LinkedList2.append(3);
LinkedList2.append(4);

let showAfter = LinkedList1.printData(
  mergeTwoLists(LinkedList1.head, LinkedList2.head)
);
console.log("🚀 ~ showAfter:", showAfter);
