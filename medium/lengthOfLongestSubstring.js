//solve using sliding window pattern and Set Data structure
// initialize start and end and maxLength and set
// iterate through string 's'
// check char is present in set or not
// -> if not present then add in Set and increment the end pointer ans add counter in maxlength (maxLength,set.size)
// -> in present then delete the char in Set and increment the start pointer

function lengthOfLongestSubstring(s) {
  if (!s) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let maxLength = 0;
  const strHash = new Set();
  while (end < s.length) {
    if (!strHash.has(s[end])) {
      strHash.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, strHash.size);
    } else {
      strHash.delete(s[start]);
      start++;
    }
  }
  return maxLength;
}
// Log to console
console.log(lengthOfLongestSubstring('abc'))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('pwwkew'))
