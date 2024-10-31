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
 * @return {TreeNode}
 */
// // DFS recursion
// var invertTree = (root) => {
//     const isBaseCase = root === null;
//     if (isBaseCase) return root;

//     return dfs(root);
// }

// const dfs = (root) => {
//     const left = invertTree(root.left);
//     const right = invertTree(root.right);

//     root.left = right;
//     root.right = left;

//     return root;
// }

// level order traversal
var invertTree = (root) => {
  if (root == null) return null;

  let queue = [];

  queue.push(root);

  while (queue.length != 0) {
    let treeNode = queue.shift();

    let temp = treeNode.left;
    treeNode.left = treeNode.right;
    treeNode.right = temp;

    if (treeNode.left != null) {
      queue.push(treeNode.left);
    }

    if (treeNode.right != null) {
      queue.push(treeNode.right);
    }
  }
  return root;
};

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);
console.log(invertTree(root));
