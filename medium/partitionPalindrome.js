const isPalindrome = (str) => str === str.split("").reverse().join("");

function dfs(s, partition, result) {
  // Base case:
  // Empty string must be palindrome
  if (0 == s.length) {
    result.push([...partition]);
    return;
  }

  // General cases:

  for (let i = 1; i <= s.length; i++) {
    let prefix = s.substring(0, i);
    let postfix = s.substring(i);

    // Current prefix is palindrome, keep trying to make more partition in postfix by DFS
    if (isPalindrome(prefix)) {
      partition.push(prefix);

      dfs(postfix, partition, result);

      partition.pop();
    }
  }
  return;
}

function partition(s) {
  // buffer for partition in DFS
  let partition = [];

  // final output of palindrome substrings
  let result = [];

  dfs(s, partition, result);

  return result;
}

console.log(partition("aab"));
