/*
basic binary search algorithm
return null if target is not found
*/

var binarySearch = (sortedArray, target) => {
  if (!Array.isArray(sortedArray)) {
    return 'ERROR: input is not an array';
  }
  if (sortedArray.length === 1) {
    if (sortedArray[0] === target) {
      return 0;
    }
  }
  var low = 0;
  var high = sortedArray.length - 1;

  while (low !== high) {
    var mid = Math.floor((low + high)/2);
    var guess = sortedArray[mid];
    if (guess === target) {
      return mid;
    }
    if (guess < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

export default binarySearch;