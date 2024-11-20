class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append: Insert a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Print: Display the elements of the linked list
  print(head) {
    let current = head;
    const elements = [];
    while (current !== null) {
      elements.push(current.val);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }

  addTwoNumbers = function (l1, l2) {
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
    return result.next;
  };
}

// Example usage:
const LinkedList1 = new LinkedList();
const LinkedList2 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList2.append(4);
LinkedList2.append(5);
LinkedList2.append(6);

LinkedList1.print(LinkedList1.head);
LinkedList2.print(LinkedList2.head);
console.log("-----------");

LinkedList1.print(
  LinkedList1.addTwoNumbers(LinkedList1.head, LinkedList2.head)
);
