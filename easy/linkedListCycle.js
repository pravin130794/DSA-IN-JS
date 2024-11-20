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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next.next;

    const hasCycle = slow === fast;
    if (hasCycle) return true;
  }

  return false;
};

let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

head.next.next.next.next = head;
const linkedList = new LinkedList();
console.log(hasCycle(head));
