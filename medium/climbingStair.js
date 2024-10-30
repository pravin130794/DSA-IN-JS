/**
 * solve using DP
 */
var climbStairs = function (n) {
  if (n <= 2) return n; // Base cases: 1 step -> 1 way, 2 steps -> 2 ways

  // Initialize a DP array where dp[i] will hold the ways to reach the ith step
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  // Fill the DP array using the recurrence relation
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(2));
