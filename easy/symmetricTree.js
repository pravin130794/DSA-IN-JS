class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function (root) {
//     const isMirror = (n1, n2) => {
//         if (!n1 && !n2) {
//             return true;
//         }

//         if (!n1 || !n2) {
//             return false;
//         }

//         return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
//     };

//     return isMirror(root.left, root.right);
// };

//Level Order Traversal
var isSymmetric = function (root) {
  if (root == null) return true;

  const leftTreeQueue = [];
  const rightTreeQueue = [];

  leftTreeQueue.push(root.left);
  rightTreeQueue.push(root.right);

  while (leftTreeQueue.length !== 0 && rightTreeQueue.length !== 0) {
    const leftNode = leftTreeQueue.shift();
    const rightNode = rightTreeQueue.shift();

    // Both nodes are null, continue to next pair
    if (leftNode === null && rightNode === null) continue;

    // One node is null and the other is not, tree is not symmetric
    if (leftNode === null || rightNode === null) return false;

    // Values must be the same
    if (leftNode.val !== rightNode.val) return false;

    // Add child nodes in mirrored order
    leftTreeQueue.push(leftNode.left);
    leftTreeQueue.push(leftNode.right);

    rightTreeQueue.push(rightNode.right);
    rightTreeQueue.push(rightNode.left);
  }
  return true;
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);
console.log(isSymmetric(root));

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(2);
root1.left.right = new Node(3);
root1.right.right = new Node(4);
console.log(isSymmetric(root1));
