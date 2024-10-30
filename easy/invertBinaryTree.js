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

console.log(invertTree([4, 2, 7, 1, 3, 6, 9]));
