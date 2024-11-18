class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Interation
var flatten = function (root) {
  if (root == null) return;

  const stack = [root];
  let tail = new Node(0);

  while (stack.length > 0) {
    const top = stack.pop();
    if (top.right) stack.push(top.right);
    if (top.left) stack.push(top.left);

    tail.right = top;
    tail.left = null;
    tail = top;
  }
  return JSON.stringify(root);
};

// Recursion
var flatten2 = function (root) {
  const dfs = (root) => {
    if (root == null) return;
    let leftTail = dfs(root.left);
    let rightTail = dfs(root.right);

    if (root.left) {
      leftTail.right = root.right;
      root.right = root.left;
      root.left = null;
    }
    let last = rightTail || leftTail || root;
    return last;
  };

  dfs(root);
};

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

console.log(flatten(root));
// console.log(flatten2(root));
