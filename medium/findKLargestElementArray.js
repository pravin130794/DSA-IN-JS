// Using Min Heap
// var findKthLargest = function (nums, k) {
//   let minHeap = new MinPriorityQueue();

//   for (let num of nums) {
//     minHeap.enqueue(num);
//     if (minHeap.size() > k) minHeap.dequeue();
//   }
//   return minHeap.front().element;
// };

var findKthLargest = function (nums, k) {
  let minVal = Infinity,
    maxVal = -Infinity;
  for (let num of nums) {
    minVal = Math.min(minVal, num);
    maxVal = Math.max(maxVal, num);
  }

  let arr = new Array(maxVal - minVal + 1).fill(0);

  for (const num of nums) {
    arr[num - minVal]++;
  }

  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    count += arr[i];
    if (count >= k) return i + minVal;
  }
};

console.log(findKthLargest([-1, 24, 32, 41, 54, 56, 16, 7], 2));
