var searchMatrix = function (matrix, target) {
  if (matrix.length == 0) {
    return false;
  }
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    }
    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    21
  )
);
