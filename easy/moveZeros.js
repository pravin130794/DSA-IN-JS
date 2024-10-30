/**
Initialise the insertPosition with 0
loop the array and check nums[i] is non zero then push into insertPosition of nums and increment the insertPosition
run then while loop for zero put in array check insertPosition count with nums of length and add zero in insertPosition of array.
 */
var moveZeroes = function (nums) {
  let insertPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[insertPosition] = nums[i];
      insertPosition++;
    }
  }

  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0;
  }
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
