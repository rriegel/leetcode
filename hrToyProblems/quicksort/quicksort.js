/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  // input is an array
  // goal is to split array based on a pivot value in the array into two arrays
  // one array is larger than the pivot values and the other is smaller
  // recursively sort the two halves
  // combine the two arrays and the pivot into a sorted array

  var larger = [];
  var smaller = [];
  var pivot = array[0];
  //loop through array
    // if current value is larger than pivot
      // push it to larger
    // else if smaller
      // push it to smaller
  // return recurion on both new arrays and concat them to form result
};
