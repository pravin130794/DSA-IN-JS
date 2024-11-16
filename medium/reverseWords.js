var reverseWords = function (s) {
  let str = s.split(" ");
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].length !== 0) {
      newStr.push(str[i]);
    }
  }
  let start = 0;
  let end = newStr.length - 1;
  while (start < end) {
    if (newStr[start] != " " || newStr[end] != " ") {
      let temp = newStr[start];
      newStr[start] = newStr[end];
      newStr[end] = temp;
    }
    start++;
    end--;
  }

  return newStr.join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords(" hello world   "));
console.log(reverseWords("a good   example"));
