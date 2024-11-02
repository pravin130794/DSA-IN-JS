var groupAnagrams = function (strs) {
  if (!strs.length) return [];

  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);

    // frequency string generation
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
