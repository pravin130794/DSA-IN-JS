var nextGreaterElements = function (nums) {
  let helperStack = [];
  let n = nums.length;
  let result = new Array(nums.length).fill(-1);

  for (let idx = n - 1; idx >= 0; idx--) {
    while (
      helperStack.length != 0 &&
      nums[idx] >= nums[helperStack[helperStack.length - 1]]
    ) {
      helperStack.pop();
    }

    if (helperStack.length != 0) {
      result[idx] = helperStack[helperStack.length - 1] - idx;
    }

    helperStack.push(idx);
  }

  return result;
};

console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));
