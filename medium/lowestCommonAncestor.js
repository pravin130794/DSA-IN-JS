class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return root;

  if (root.val == p.val || root.val == q.val) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;

  return left || right;
};

let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.right = new Node(8);
root.right.left = new Node(0);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

console.log(lowestCommonAncestor(root, new Node(5), new Node(4)));
