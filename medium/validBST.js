class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var isValidBST = function (root) {
  return validate(root, -Number.MAX_VALUE, Number.MAX_VALUE);
};

var validate = function (node, lower, upper) {
  if (node == null) {
    // empty node or empty tree
    return true;
  }

  if (lower < node.val && node.val < upper) {
    // check if all tree nodes follow BST rule
    return (
      validate(node.left, lower, node.val) &&
      validate(node.right, node.val, upper)
    );
  } else {
    // early reject when we find violation
    return false;
  }
};

let root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

console.log(isValidBST(root));
let root1 = new Node(5);
root1.left = new Node(1);
root1.right = new Node(4);

console.log(isValidBST(root1));
