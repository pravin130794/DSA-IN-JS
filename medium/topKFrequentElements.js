/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Bucket Sort alogorithm

var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  // create freqMap data
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // create bucket list
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length === k) break;
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
