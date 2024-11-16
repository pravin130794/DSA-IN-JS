var generateParenthesis = function (n) {
  let stack = [];
  let result = [];
  const backtrack = (open, close) => {
    if (open == close && open == n) {
      result.push(stack.join(""));
    }

    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  };

  backtrack(0, 0);
  return result;
};

console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
