var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (word.charAt(0) == board[r][c]) {
        let found = dfs(board, r, c, word, 0);
        if (found) return true;
      }
    }
  }
  return false;
};

function dfs(board, r, c, word, wordIndex) {
  //base case
  //valid case
  if (wordIndex == word.length) {
    return true;
  }

  let rows = board.length;
  let cols = board[0].length;
  // out of bound case
  if (r < 0 || c < 0 || r >= rows || c >= cols) {
    return false;
  }

  // Invalid case
  if (board[r][c] == " " || board[r][c] != word.charAt(wordIndex)) {
    return false;
  }
  // marked as visited
  let ch = board[r][c];
  board[r][c] = " ";

  // dfs call
  if (
    dfs(board, r - 1, c, word, wordIndex + 1) ||
    dfs(board, r, c + 1, word, wordIndex + 1) ||
    dfs(board, r + 1, c, word, wordIndex + 1) ||
    dfs(board, r, c - 1, word, wordIndex + 1)
  ) {
    return true;
  }
  //backtracking
  board[r][c] = ch;

  return false;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
