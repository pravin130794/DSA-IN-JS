/**

Follow Steps:

1. create new Set()

2. loop the array of integer 

3. check in map (target - nums[i]) 

3.1 if present get the map value map.get(target - nums[i]) , i

3.2 if not present then store in map map.set(nums[i], i);
4. after loop if not match any then return [];
 */

var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
