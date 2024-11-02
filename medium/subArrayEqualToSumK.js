/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  let res = 0;
  let curr = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    curr += nums[i];
    if (map.has(curr - k)) {
      res += map.get(curr - k);
    }
    if (map.get(curr)) {
      map.set(curr, map.get(curr) + 1);
    } else {
      map.set(curr, 1);
    }
  }
  return res;
};

console.log(subarraySum([1, 2, 3], 3));
