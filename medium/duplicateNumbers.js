var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 7]));
