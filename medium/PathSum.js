class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (root.val == targetSum && root.left == null && root.right == null)
    return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.right = new Node(8);
root.right.left = new Node(0);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

// 3 + 5 + 6;
console.log(hasPathSum(root, 14));

console.log(hasPathSum(root, 15));

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (root.val == targetSum && root.left == null && root.right == null)
    return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// return path
var pathSumII = function (root, sum) {
  let paths = [];
  if (!root) {
    return [];
  }
  const helper = (root, sum, slate) => {
    if (!root) return [];

    if (root.val == sum && root.left == null && root.right == null) {
      slate.push(root.val);
      paths.push(slate.slice());
      slate.pop();
    }

    if (root.left) {
      slate.push(root.val);
      helper(root.left, sum - root.val, slate);
      slate.pop();
    }
    if (root.right) {
      slate.push(root.val);
      helper(root.right, sum - root.val, slate);
      slate.pop();
    }
  };

  helper(root, sum, []);
  return paths;
};

let root1 = new Node(3);
root1.left = new Node(5);
root1.right = new Node(1);
root1.left.left = new Node(6);
root1.left.right = new Node(2);
root1.right.right = new Node(8);
root1.right.left = new Node(0);
root1.left.right.left = new Node(7);
root1.left.right.right = new Node(4);

console.log(pathSumII(root1, 14));

// return total path
var dfs = function (root, previousSum, targetSum) {
  if (root == null) {
    return 0;
  }

  let currentSum = previousSum + root.val;
  let count = 0;

  if (currentSum == targetSum) {
    count = 1;
  }

  return (
    count +
    dfs(root.left, currentSum, targetSum) +
    dfs(root.right, currentSum, targetSum)
  );
};

var pathSumIII = function (root, targetSum) {
  if (root == null) {
    return 0;
  }
  return (
    dfs(root, 0, targetSum) +
    pathSumIII(root.left, targetSum) +
    pathSumIII(root.right, targetSum)
  );
};

let root2 = new Node(3);
root2.left = new Node(5);
root2.right = new Node(1);
root2.left.left = new Node(6);
root2.left.right = new Node(2);
root2.right.right = new Node(8);
root2.right.left = new Node(0);
root2.left.right.left = new Node(7);
root2.left.right.right = new Node(4);

console.log(pathSumIII(root1, 14));
