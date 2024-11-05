var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  // Sort intervals by the start value
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let newInterval = intervals[0];
  result.push(newInterval);

  for (let interval of intervals) {
    if (interval[0] <= newInterval[1]) {
      // Overlapping intervals, update the end if needed
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    } else {
      // Disjoint intervals, add the new interval to the result list
      newInterval = interval;
      result.push(newInterval);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
