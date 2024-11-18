class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var kthSmallest = function (root, k) {
  let n = k;
  let ans;

  var helper = (root) => {
    if (!root) return;

    helper(root.left);
    n--;
    if (n == 0) {
      ans = root.val;
    }
    helper(root.right);
  };
  helper(root);
  return ans;
};

let root = new Node(5);
root.left = new Node(3);
root.right = new Node(6);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.left.left.left = new Node(1);

console.log(kthSmallest(root, 3));
