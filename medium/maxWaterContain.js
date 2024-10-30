/**
 * @param {number[]} height
 * @return {number}
 */

// Two Pointer apporach
var maxArea = function (heights) {
  let l = 0;
  let r = heights.length - 1;
  let res = 0;

  while (l < r) {
    const area = Math.min(heights[l], heights[r]) * (r - l);
    res = Math.max(res, area);
    if (heights[l] <= heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
