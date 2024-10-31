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

// Recursion Mode
//  var maxDepth = function(root) {
//     if(root === undefined || root===null){
//         return 0;
//     }
//     return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
// };

var maxDepth = function (root) {
  if (root === null) return 0;
  let elementQueue = [];

  elementQueue.push(root);
  let numberOfLevels = 0;

  while (true) {
    //maintain count of each node at each level
    let nodeCountAtLevel = elementQueue.length;

    if (nodeCountAtLevel == 0) {
      // if we find no node at level, it means tree has ended and return
      return numberOfLevels;
    }

    // dequeue all nodes present a particular level and add it to queue
    while (nodeCountAtLevel > 0) {
      const element = elementQueue.shift();

      if (element.left != null) {
        elementQueue.push(element.left);
      }

      if (element.right != null) {
        elementQueue.push(element.right);
      }
      nodeCountAtLevel--;
    }
    numberOfLevels++;
  }
};

let root = new Node(1);
root.left = new Node(2);
root.left = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
console.log(maxDepth(root));
