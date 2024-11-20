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

  swapPairs = function (head) {
    let dummy = new Node(-1);
    dummy.next = head;
    let point = dummy;

    //Ensure nodeswe are swapping is not null
    while (point.next && point.next.next) {
      // identify swap nodes
      let swap1 = point.next;
      let swap2 = point.next.next;

      // actual swap
      swap1.next = swap2.next;
      swap2.next = swap1;

      // prepare for next swap
      point.next = swap2;
      point = swap1;
    }
    // return the start node
    return dummy.next;
  };
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.print(linkedList.head);
linkedList.print(linkedList.swapPairs(linkedList.head));
