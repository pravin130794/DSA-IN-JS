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
 * @return {number}
 */

// Iterative
// var diameterOfBinaryTree = function (root) {
//     if (!root) return 0;
//     let diameter = 0;
//     const stack = [[root, false]]; // Stack to store [node, visited]
//     const heights = new Map(); // Map to store heights of nodes
//     while (stack.length != 0) {
//         const [node, visited] = stack.pop();
//         if (node === null) continue;
//         if (visited) {
//             // Calculate the height of the node after visiting its children
//             const leftHeight = heights.get(node.left) || 0;
//             const rightHeight = heights.get(node.right) || 0;
//             // Update the height of the current node
//             const currentHeight = 1 + Math.max(leftHeight, rightHeight);
//             heights.set(node, currentHeight);
//             // Update the diameter
//             diameter = Math.max(diameter, leftHeight + rightHeight);
//         } else {
//             // Post-order traversal: visit children first
//             stack.push([node, true]); // Mark the node as visited for later height calculation
//             stack.push([node.right, false]); // Push right child
//             stack.push([node.left, false]);  // Push left child
//         }
//     }
//     return diameter;
// };

// Recursion

var diameterOfBinaryTree = function (root) {
  let maxLen = 0;
  function traverse(root) {
    if (root === null) {
      return 0;
    }
    let left = traverse(root.left);
    let right = traverse(root.right);
    let len = left + right;
    maxLen = Math.max(len, maxLen);
    return 1 + Math.max(left, right);
  }

  traverse(root);
  return maxLen;
};

let root = new Node(1);
root.left = new Node(2);
root.left = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
console.log(diameterOfBinaryTree(root));
