var rotate = function (nums, k) {
  const rotations = k % nums.length;
  if (rotations === 0) {
    return nums; // No rotations needed
  }
  const removedElements = nums.splice(nums.length - rotations);
  nums.unshift(...removedElements);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5], 2));
