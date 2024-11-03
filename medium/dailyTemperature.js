var dailyTemperatures = function (temperatures) {
  let helperStack = [];
  let n = temperatures.length;
  let result = new Array(temperatures.length).fill(0);

  for (let idx = n - 1; idx >= 0; idx--) {
    while (
      helperStack.length != 0 &&
      temperatures[idx] >= temperatures[helperStack[helperStack.length - 1]]
    ) {
      helperStack.pop();
    }

    if (helperStack.length != 0) {
      result[idx] = helperStack[helperStack.length - 1] - idx;
    }

    helperStack.push(idx);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
