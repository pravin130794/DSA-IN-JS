var rotate = function (matrix) {
  let n = matrix.length;
  for (let i = 0; i < (n + 1) / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      // start 4 way swapp
      //temp = bottom left
      let temp = matrix[n - 1 - j][i];

      // bottom left = bottom tight
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];

      // bottom right = top tight
      matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];

      // top right = top left
      matrix[j][n - 1 - i] = matrix[i][j];

      // top left = temp
      matrix[i][j] = temp;
    }
  }
  return matrix;
};

var rotate2 = function (matrix) {
  const edgeLength = matrix.length;

  let top = 0;
  let bottom = edgeLength - 1;

  while (top < bottom) {
    for (let col = 0; col < edgeLength; col++) {
      let temp = matrix[top][col];
      matrix[top][col] = matrix[bottom][col];
      matrix[bottom][col] = temp;
    }
    top++;
    bottom--;
  }

  for (let row = 0; row < edgeLength; row++) {
    for (let col = row + 1; col < edgeLength; col++) {
      let temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
