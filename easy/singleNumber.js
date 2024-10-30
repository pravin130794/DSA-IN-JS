/**
solve by XOR method bitwise
Initialise with sing with 0th index
start loop with index 1
sing = sing ^ nums[i]
return the sing
 */
var singleNumber = function (nums) {
  let sing = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sing = sing ^ nums[i];
  }
  return sing;
};

console.log(singleNumber([2, 2, 1]));
