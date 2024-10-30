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

console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));
