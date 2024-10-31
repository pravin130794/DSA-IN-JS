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
  reverseList() {
    let [prev, current] = [null, this.head];
    while (current) {
      [current.next, prev, current] = [prev, current, current.next];
    }
    // return prev;
    this.head = prev;

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
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

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

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList1.append(4);
LinkedList1.append(5);
let showBefore = LinkedList1.printData();
console.log("🚀 ~ show:", showBefore);
LinkedList1.reverseList();
let showAfter = LinkedList1.printData();
console.log("🚀 ~ show:", showAfter);
