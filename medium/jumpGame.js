var canJump = function (nums) {
  // Initally the final position is last index
  let finalPosition = nums.length - 1;

  // Start with the second last index
  for (let idx = nums.length - 2; idx >= 0; idx--) {
    // If you can reach the final position from this index
    //update the position of finalPosition
    if (idx + nums[idx] >= finalPosition) {
      finalPosition = idx;
    }
  }

  // if we can reach the first index then we can make the jump
  return finalPosition == 0;
};

console.log(canJump([2, 3, 1, 1, 4]));
