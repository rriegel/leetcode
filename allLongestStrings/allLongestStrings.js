function allLongestStrings(inputArray) {
  // var to track longest string length
  // object to hold strings and l for quick return as array using object.keys
  // loop
  let maxL = 0, obj = {};

  for (let i = 0; i < inputArray.length; i ++) {
      let currentL = inputArray[i].length;
      if (currentL > maxL) { maxL = currentL};
  }
  return inputArray.filter(str => str.length === maxL);
};

export default allLongestStrings;