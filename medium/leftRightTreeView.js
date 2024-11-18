class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var rightSideView = function (root) {
  if (!root) return [];
  let res = {};
  var dfs = (root, level, res) => {
    if (!root) return;

    if (res[level] == null || res[level] == undefined) res[level] = root.val;
    dfs(root.right, level + 1, res);
    dfs(root.left, level + 1, res);
  };
  dfs(root, 0, res);
  return Object.values(res);
};

var leftSideView = function (root) {
  if (!root) return [];
  let res = {};
  var dfs = (root, level, res) => {
    if (!root) return;

    if (res[level] == null || res[level] == undefined) res[level] = root.val;
    dfs(root.left, level + 1, res);
    dfs(root.right, level + 1, res);
  };
  dfs(root, 0, res);
  return Object.values(res);
};

//[1,2,3,null,5,null,4]
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);
root.right.right = new Node(4);

console.log(rightSideView(root));
console.log(leftSideView(root));
