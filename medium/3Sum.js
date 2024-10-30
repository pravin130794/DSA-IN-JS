/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * * consider first element of array of triplets and for remaining 2 conside two pointer approach
 */
var threeSum = function (nums) {
  if (nums == null || nums.length < 3) return [];

  //sort the element
  nums.sort((a, b) => a - b);

  let result = new Set();

  // Now fix the first element and find the other two elements
  for (let i = 0; i < nums.length - 2; i++) {
    // find the two element using two pointer approach
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.add(JSON.stringify([nums[i], nums[left], nums[right]]));
        left++;
        right--;
      } else if (sum < 0) {
        // negative case
        left++;
      } else {
        right--;
      }
    }
  }
  return Array.from(result, (triplet) => JSON.parse(triplet));
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
