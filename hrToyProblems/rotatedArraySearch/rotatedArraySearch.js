/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {

  let left = 0;
  let right = rotated.length - 1;

  while(left < right){
    let mid = Math.floor( (left+right)/2 );
    if (rotated[mid] > rotated[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  // we now have the pivot of the array
  // so we can set that in a var and reset the left and right
  let pivot = left;
  left = 0;
  right = rotated.length - 1;
  // now find which half of the array the target is in
  // if the pivot is less than the target and the target is less than right boundary
  if (rotated[pivot] <= target && target <= rotated[right]) {
    // we can ignore the left side of the array
    left = pivot;
  } else { // otherwise
    // we ignore the left side of the array
    right = pivot;
  }

  // now we binary search that half of the sorted array

  while(left <= right) {
  let mid = Math.floor((left+right)/2);
  if (rotated[mid] === target) {
    return mid;
  }
  if (rotated[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
// if the target isnt found, return null
return null;

};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5)

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null)