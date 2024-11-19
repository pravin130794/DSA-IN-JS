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

var addTwoNumbers = function (l1, l2) {
  let result = new Node(0);
  let ptr = result;
  let carry = 0;

  while (l1 || l2) {
    let sum = 0 + carry;

    if (l1 != null) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2 != null) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ptr.next = new Node(sum);
    ptr = ptr.next;
  }

  if (carry == 1) ptr.next = new Node(1);
  console.log("🚀 ~ addTwoNumbers ~ result:", result);
  return result.next;
};

const LinkedList1 = new LinkedList();
const LinkedList2 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList2.append(4);
LinkedList2.append(5);
LinkedList2.append(6);

console.log(addTwoNumbers(LinkedList1, LinkedList2));
