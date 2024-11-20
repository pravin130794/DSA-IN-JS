class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
    this.random = null;
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
      elements.push(current.val);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }

  copyRandomList = function (head) {
    const nodeCopy = new Map();
    nodeCopy.set(null, null);
    let node = head;

    while (node) {
      nodeCopy.set(node, new Node(node.val));
      node = node.next;
    }

    node = head;

    while (node) {
      nodeCopy.get(node).next = nodeCopy.get(node.next);
      nodeCopy.get(node).random = nodeCopy.get(node.random);
      node = node.next;
    }

    return nodeCopy.get(head);
  };
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(7);
linkedList.append(13);
linkedList.append(11);
linkedList.append(10);
linkedList.append(1);
linkedList.print(linkedList.head);
linkedList.print(linkedList.copyRandomList(linkedList.head));
