var jump = function (nums) {
  let totalJumps = 0;
  //destination is last index
  let destination = nums.length - 1;
  let coverage = 0;
  let lastJumpIdx = 0;

  // Base Case
  if (nums.length == 1) return 0;

  // Greedy Strategy: extend coverage as long as possible
  for (let i = 0; i < nums.length; i++) {
    coverage = Math.max(coverage, i + nums[i]);

    if (i == lastJumpIdx) {
      lastJumpIdx = coverage;
      totalJumps++;
      // Check if we reached destination
      if (coverage >= destination) {
        return totalJumps + 1;
      }
    }
  }
  return totalJumps + 1;
};

console.log(jump([2, 3, 1, 1, 4]));
