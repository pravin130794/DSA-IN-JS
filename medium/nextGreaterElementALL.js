var nextGreaterElementFirst = function (nums1, nums2) {
  const map = new Map(); // map for next greater element
  const stack = [];
  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      // Pop elements from stack and update map with next greater element
      map.set(stack.pop(), num);
    }
    stack.push(num); // Push current element onto stack
  }
  for (let i = 0; i < nums1.length; i++) {
    // Check if each element in nums1 has a next greater element in map
    nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
  }
  return nums1;
};
console.log(nextGreaterElementFirst([4, 1, 2], [1, 3, 4, 2]));

// Given Circular Array
var nextGreaterElementsSecond = function (nums) {
  const n = nums.length;
  const st = [];
  const ans = new Array(n).fill(-1);
  for (let i = n * 2 - 1; i >= 0; i--) {
    while (st.length && st[st.length - 1] <= nums[i % n]) {
      st.pop();
    }
    if (i < n) {
      ans[i] = st.length ? st[st.length - 1] : -1;
    }
    st.push(nums[i % n]);
  }
  return ans;
};

console.log(nextGreaterElementsSecond([1, 2, 3, 4, 3]));
