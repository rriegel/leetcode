/*

Grokking Algorithms Ch 2

Selection Sort Algorithm -- O(n^2)

*/

// sort an array from smallest to largest

// write a function that finds the smallest element in the array
var findSmallest = (arr) => {
  var smallest = arr[0];
  var smallestIdx = 0;
  for (var i = 1; i < arr.length; i ++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIdx = i;
    }
  }
  return smallestIdx;
};
// write a function that recursively finds the smallest element in the array and  removes it after finding
var selectionSort = (arr) => {
  var sortedArr = [];
  var l = arr.length;
  for (var i = 0; i < l; i ++) {
    var smallest = findSmallest(arr); /* returns the index of the smallest element in the array */
    sortedArr.push(Number(arr.splice(smallest, 1))); /* removes the smallest value from the array and adds it to sortedArr */
  }
  return sortedArr;
};

export default selectionSort;