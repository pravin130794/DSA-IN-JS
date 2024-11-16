var reverseWords = function (s) {
  let str = s.split("");

  let left = 0;
  let right = 0;

  while (right < str.length) {
    // if we find the space the reverse the words
    if (str[right] == " ") {
      swap(str, left, right - 1);
      left = right + 1;
    }
    right++;
  }
  swap(str, left, right - 1);
  return str.join("");
};

function swap(str, left, right) {
  while (left < right) {
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    left++;
    right--;
  }
}
console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords("Mr Ding"));
