var sortColors = function (nums) {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  while (mid <= end) {
    switch (nums[mid]) {
      case 0:
        swap(nums, start, mid);
        mid++;
        start++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        swap(nums, mid, end);
        end--;
        break;
    }
  }
  return nums;
};

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

console.log(sortColors([2, 1, 0, 1, 2, 0, 1, 2, 0]));
