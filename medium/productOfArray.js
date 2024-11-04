
/**
 * result[i] = multiply of all left * multiply of all right  
*/


var productExceptSelf = function (nums) {
  let left = [];
  let right = [];

  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans[i] = left[i] * right[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]));
