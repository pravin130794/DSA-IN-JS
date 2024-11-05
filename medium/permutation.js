var permutation = function (nums) {
  let resultList = [];
  backtrack(resultList, [], nums);
  return resultList;
};

function backtrack(resultList, tempList, nums) {
  if (tempList.length === nums.length) {
    resultList.push([...tempList]);
    return;
  }

  for (let number of nums) {
    if (tempList.includes(number)) {
      continue;
    }
    tempList.push(number);
    backtrack(resultList, tempList, nums);

    tempList.pop();
  }
}

console.log(permutation([1, 2, 3]));
