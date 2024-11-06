var searchRange = function (nums, target) {
  let left = findLeftSide(nums, target);
  let right = findRightSide(nums, target);
  return [left, right];
};

function findLeftSide(nums, target) {
  let index = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] == target) {
      index = mid;
      high = mid - 1; // look for left sub array
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return index;
}

function findRightSide(nums, target) {
  let index = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] == target) {
      index = mid;
      low = mid + 1; // look for right sub array
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return index;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
