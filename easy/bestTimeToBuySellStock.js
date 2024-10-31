/**
 follow steps:

Initialise `left` (buy) at 0, `right` (sell) at 1, and `max_profit` as 0.
Loop while `right` < `prices.length`:
 - If `prices[left] < prices[right]`, calculate `profit` and update `max_profit`.

  - Else, move `left` to `right`.

3. Increment `right` each loop.

4. Return `max_profit`.



This two-pointer approach efficiently finds the maximum profit in **O(n)** time.
 */

var maxProfit = function (prices) {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; // our current profit

      max_profit = Math.max(max_profit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
