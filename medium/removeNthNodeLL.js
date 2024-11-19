class LinkedLists {
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

var removeNthFromEnd = function (head, n) {
  let dummy = new Node(-1); // Create a dummy node
  dummy.next = head;
  let ptr1 = dummy;
  let ptr2 = dummy;

  // Move ptr2 pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (ptr2 === null) return head; // Edge case: n is greater than list length
    ptr2 = ptr2.next;
  }

  // Move both pointers until ptr2 reaches the end
  while (ptr2.next !== null) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  // Remove the nth node from the end
  ptr1.next = ptr1.next.next;

  return dummy.next; // Return the new head
};

const LinkedList = new LinkedLists();

LinkedList.append(1);
LinkedList.append(2);
LinkedList.append(3);
LinkedList.append(4);
LinkedList.append(5);
LinkedList.append(6);

let showBefore = LinkedList.printData();
console.log("🚀 ~ show:", showBefore);
console.log(removeNthFromEnd(LinkedList, 3));
let showAfter = LinkedList.printData();
console.log("🚀 ~ show:", showAfter);
