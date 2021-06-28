/*
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
*/
// Write a recursive implementation of binary search

const binarySearch = (sortedArray, target, newLow, newHi) => {
  if (!Array.isArray(sortedArray)) {
    return 'ERROR: input is not an array';
  }

  let low = newLow || 0, high = newHi || sortedArray.length - 1;
  let mid = Math.floor((low + high) / 2);
  let guess = sortedArray[mid];
  // base case - success
  if (guess === target) {
    return mid;
  }
  // base case - failure
  if (low === high) {
    return null;
  }
  // recursive case
  if (guess < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
  return binarySearch(sortedArray, target, low, high);
};

export default binarySearch;