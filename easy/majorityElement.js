/**
Brut Force
var majorityElement = function(nums) {
const n = nums.length;
for (let i = 0; i < n; i++) {
let count = 0;
for (let j = 0; j < n; j++) {
if (nums[j] === nums[i]) {
count++;
}

}

if (count > n / 2) return nums[i];

}

};



Sorting 
var majorityElement = function(nums) {
nums.sort((a, b) => a - b);
return nums[Math.floor(nums.length / 2)];
};



Using HashMap
var majorityElement = function(nums) {
const counts = {};
const majorityCount = Math.floor(nums.length / 2);


for (let num of nums) {
counts[num] = (counts[num] || 0) + 1;
if (counts[num] > majorityCount) {
return num;
}
}
};



Moor'e Voting Algorithm


﻿var majorityElement = function (nums) {
let votes = 1; // initialise 1 for first votes
let majority = nums[0]; // consider first element of aaray

// loop through each element of array
for(let i = 1; i < nums.length;i++){
// check votes is 0 then set nums[i] might be majority and increase by 1 votes.
if(votes === 0){
majority = nums[i];
votes++;
}else if(majority === nums[i]){ // check if majority is same with current element of aaray match then just increse votes by 1
votes++;
}else {
// nothing match above condition then drecase the votes by 1
votes--;
}
}

return majority;

}; 
 */

var majorityElement = function (nums) {
  let votes = 1; // initialise 1 for first votes
  let majority = nums[0]; // consider first element of aaray

  // loop through each element of array
  for (let i = 1; i < nums.length; i++) {
    // check votes is 0 then set nums[i] might be majority and increase by 1 votes.
    if (votes === 0) {
      majority = nums[i];
      votes++;
    } else if (majority === nums[i]) {
      // check if majority is same with current element of aaray match then just increse votes by 1
      votes++;
    } else {
      // nothing match above condition then drecase the votes by 1
      votes--;
    }
  }

  return majority;
};

console.log(majorityElement([3, 2, 2, 3, 3]));
