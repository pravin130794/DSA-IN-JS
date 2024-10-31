/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

//using Binary Search Algorithm
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};
var helper = function (nums, left, right) {
  if (left > right) {
    return null;
  }
  var mid = Math.floor((left + right) / 2);
  var root = new TreeNode(nums[mid], null, null);
  root.left = helper(nums, left, mid - 1);
  root.right = helper(nums, mid + 1, right);
  return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
