var spiralOrder = function (matrix) {
  let res = [];
  if (matrix.length == 0) {
    return res;
  }
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // Traverse Right
    for (let j = colBegin; j <= colEnd; j++) {
      res.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    // Traverse Down
    for (let j = rowBegin; j <= rowEnd; j++) {
      res.push(matrix[j][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      // Traverse Left
      for (let j = colEnd; j >= colBegin; j--) {
        res.push(matrix[rowEnd][j]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      // Traverse Up
      for (let j = rowEnd; j >= rowBegin; j--) {
        res.push(matrix[j][colBegin]);
      }
    }
    colBegin++;
  }
  return res;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
