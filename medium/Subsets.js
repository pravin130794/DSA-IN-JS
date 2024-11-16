var subsets = function (nums) {
  let resultList = [];
  const backtrack = (resultList, tempList, nums, start) => {
    resultList.push([...tempList]);

    for (let i = start; i < nums.length; i++) {
      tempList.push(nums[i]);
      backtrack(resultList, tempList, nums, i + 1);

      tempList.pop();
    }
  };
  backtrack(resultList, [], nums, 0);
  return resultList;
};

console.log(subsets([1, 2, 3]));
