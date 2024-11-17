class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelValues = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelValues.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(levelValues);
  }

  return result;
};

let root = new Node(2);
root.left = new Node(8);
root.right = new Node(4);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.left.right.left = new Node(1);
root.left.right.left.left = new Node(6);
console.log(levelOrder(root));
