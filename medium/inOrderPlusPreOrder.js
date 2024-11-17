/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let inOrderIndexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inOrderIndexMap.set(inorder[i], i);
  }

  const splitTrerPreOrder = (
    preorder,
    inOrderIndexMap,
    rootIndex,
    left,
    right
  ) => {
    let root = new TreeNode(preorder[rootIndex]);

    let mid = inOrderIndexMap.get(preorder[rootIndex]);
    if (mid > left) {
      root.left = splitTrerPreOrder(
        preorder,
        inOrderIndexMap,
        rootIndex + 1,
        left,
        mid - 1
      );
    }
    if (mid < right) {
      root.right = splitTrerPreOrder(
        preorder,
        inOrderIndexMap,
        rootIndex + mid - left + 1,
        mid + 1,
        right
      );
    }
    return root;
  };

  return splitTrerPreOrder(preorder, inOrderIndexMap, 0, 0, inorder.length - 1);
};
