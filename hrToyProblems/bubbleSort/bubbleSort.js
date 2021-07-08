/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

var bubbleSort = function(array) {
  var result = [], switchCount = 0;

  for (var i = 0; i < array.length; i ++) {
    // if current element is greater than next element
    if (array[i] > array[i+1]) {
      // switch them
      result.push(array[i+1]);
      result.push(array[i]);
      // increment i because you added 2 elements
      i ++;
      // increment switchCount
      switchCount ++;
    } else {
      // push current element per usual
      result.push(array[i]);
    }
  }
  // if there was a switch in the previous loop cycle, recursion
  if (switchCount > 0) {
    return bubbleSort(result);
  }
  // return the sorted result array
  return result;
};

var arr1 = [3, 6, 2, 1, 4, 5, 19, 3];
console.log(bubbleSort(arr1));
