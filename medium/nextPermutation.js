var nextPermutation = function (nums) {
  let n = nums.length;
  let k = nums.length - 2;

  // null Checks
  if (nums.length === 0 || nums === null) return;

  //find k
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] <= nums[i - 1]) {
      k--;
    } else {
      break;
    }
  }

  // if k === -1 then reverse
  if (k === -1) {
    reverse(nums, 0, n - 1);
    return;
  }

  // replace/swap k with next grater element and reverse
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] > nums[k]) {
      let temp = nums[k];
      nums[k] = nums[i];
      nums[i] = temp;
      break;
    }
  }

  reverse(nums, k + 1, n - 1);
  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
console.log(nextPermutation([1, 1, 5]));
