// function findAnagrams(s, p) {
//   const result = [];
//   const pLength = p.length;
//   const sLength = s.length;

//   if (sLength < pLength) return result;

//   const pCount = Array(26).fill(0);
//   const sCount = Array(26).fill(0);
//   const aCharCode = "a".charCodeAt(0);

//   // Initialize the frequency map for `p`
//   for (let i = 0; i < pLength; i++) {
//     pCount[p.charCodeAt(i) - aCharCode]++;
//     sCount[s.charCodeAt(i) - aCharCode]++;
//   }

//   // Compare counts of the first window
//   if (pCount.join("") === sCount.join("")) result.push(0);

//   // Slide the window over `s`
//   for (let i = pLength; i < sLength; i++) {
//     // Include a new character in the window
//     sCount[s.charCodeAt(i) - aCharCode]++;
//     // Exclude the character that is left out of the window
//     sCount[s.charCodeAt(i - pLength) - aCharCode]--;

//     // Check if the current window is an anagram of `p`
//     if (pCount.join("") === sCount.join("")) {
//       result.push(i - pLength + 1);
//     }
//   }

//   return result;
// }

var findAnagrams = function (s, p) {
  let hashMap = new Map();
  /**
   * * First store all the characters of p in a hash map with value as number of occurences
   */
  for (let i = 0; i < p.length; i++) {
    if (hashMap.has(p[i])) {
      hashMap.set(p[i], hashMap.get(p[i]) + 1);
    } else {
      hashMap.set(p[i], 1);
    }
  }

  let res = new Array();
  /**
   * * Create two variables start and end
   */
  let start = 0;
  let end = 0;
  while (end < s.length) {
    /**
     * * f hashMap of s[end] is greater than 0, subtract 1 from it and increase end
     */
    if (hashMap.get(s[end]) > 0) {
      hashMap.set(s[end], hashMap.get(s[end]) - 1);
      end++;
      /**
       * * if check end - start is equal to pLen if it's pLen, push start to result array
       */
      if (end - start == p.length) {
        res.push(start);
      }
    } else if (start == end) {
      start++;
      end++;
    } else {
      /**
       * * store s[start] in hashMap with 1 and increment start
       */
      hashMap.set(s[start], hashMap.get(s[start]) + 1);
      start++;
    }
  }
  return res;
};

// Example usage
console.log(findAnagrams("cbaebabacd", "abc"));
// Expected output: [0, 6] because "cba" and "bac" are anagrams of "abc" at indices 0 and 6
