function decodeString(s) {
  const numStack = [];
  const stringStack = [];
  let k = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!isNaN(c)) {
      k = k * 10 + Number(c);
      continue;
    }

    if (c === "[") {
      numStack.push(k);
      k = 0;
      stringStack.push("[");
      continue;
    }

    if (c !== "]") {
      stringStack.push(c);
      continue;
    }

    let temp = "";
    while (stringStack[stringStack.length - 1] !== "[") {
      temp = stringStack.pop() + temp;
    }

    // Remove the '['
    stringStack.pop();

    // Repeat the string   ( 2[ab] ==> "abab" )
    const count = numStack.pop();
    let replacement = "";
    for (let j = 0; j < count; j++) {
      replacement += temp;
    }

    // Push the expanded string back to the stack
    stringStack.push(replacement);
  }

  // Build the final result
  let result = "";
  while (stringStack.length > 0) {
    result = stringStack.pop() + result;
  }

  return result;
}

console.log(decodeString("3[a]2[bc]"));

/**
 1. create two stack numStack and stringStack and k = 0
 2. iterate the string
 3. 
 */
