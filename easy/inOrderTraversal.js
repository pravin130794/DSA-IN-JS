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
 * @return {number[]}
 */

/*
Binary Tree InOrder Traversal
Left --> Value --> Right
use the recursion
*/

// using Stack
// var inorderTraversal = function (root) {

//     const result = [];
//     const stack = [];
//     let current = root;

//     while (current !== null || stack.length > 0) {
//         // Go to the leftmost node
//         while (current !== null) {
//             stack.push(current);
//             current = current.left;
//         }

//         // Process the node at the top of the stack
//         current = stack.pop();
//         result.push(current.val);

//         // Visit the right subtree
//         current = current.right;
//     }

//     return result;
// };

// using recursions
var inorderTraversal = function (root, result = []) {
  if (root === null) return result;

  // Visit left subtree
  inorderTraversal(root.left, result);

  // Visit root
  result.push(root.value);

  // Visit right subtree
  inorderTraversal(root.right, result);

  return result;
};

let root = new Node(1);
root.left = new Node(2);
root.left = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
console.log(inorderTraversal(root));
