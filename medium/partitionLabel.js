function partitionLabels(str) {
  const partitions = [];

  let i = 0;
  while (i < str.length) {
    // Get first and last index of first character
    const startIndex = i;
    let endIndex = str.lastIndexOf(str[startIndex]);

    for (let s = startIndex + 1; s <= endIndex - 1; s++) {
      // Find last index of any subsequent characters
      const lastIndexOfNextChar = str.lastIndexOf(str[s]);

      if (lastIndexOfNextChar > endIndex) {
        // Update endIndex if required
        endIndex = lastIndexOfNextChar;
      }
    }

    partitions.push(endIndex - startIndex + 1);
    i = endIndex + 1;
  }

  return partitions;
}

console.log(partitionLabels("ababcbacadefegdehijhklij"));
