/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {

  var sub = function (left, right) {
    //
    if (right === left) { return null; }

    // Find midpoint
    var mid = Math.floor((right - left) / 2) + left;

    // Check if we found the target.
    if (array[mid] === target) {
      return mid;

    // Second check to see if we haven't found the target.
    } else if (left === right - 1) {
      return null;

    // If not, decide which half to recurse on.
    } else if (array[mid] > target) {
      return sub(left, mid);
    } else {
      return sub(mid, right);
    }
  };

  // Initiate recursion
  return sub(0, array.length);
};

