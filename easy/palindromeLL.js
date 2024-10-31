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
    if (fast.value != slow.value) {
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

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList1.append(2);
LinkedList1.append(1);
let showBefore = LinkedList1.printData();
console.log("🚀 ~ showBefore:", showBefore);
console.log(isPalindrome(LinkedList1.head));
let showAfter = LinkedList1.printData();
console.log("🚀 ~ showAfter:", showAfter);
