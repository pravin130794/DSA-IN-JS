class Node {
  constructor(data) {
    this.data = data;
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

  // Prepend: Insert a new node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete: Remove the first occurrence of a node with the given data
  delete(data) {
    if (!this.head) {
      return; // List is empty
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Search: Find the first occurrence of a node with the given data
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; // Data found
      }
      current = current.next;
    }
    return false; // Data not found
  }

  // Print: Display the elements of the linked list
  print(head) {
    let current = head;
    const elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }

  removeNthFromEnd = function (head, n) {
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
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.print(linkedList.head);
linkedList.print(linkedList.removeNthFromEnd(linkedList.head, 2));
