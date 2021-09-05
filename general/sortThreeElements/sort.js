/*
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/
// Rs come first, Gs second, Bs last
// you can only swap elements
// linear and in place O(n) time | O(1) space

// approach - two pointer
  // keep track of first element and last element
  // loop through the array - while loop
    // if the currelement is a B
      // swap it with the last element
      // decrement last pointer
    // if currelement is a R
      // swap it with the front
      // increment first pointer
    // increment mid pointer
  // return arr
function sortThreeChars(arr) {
  let first = 0, last = arr.length-1, mid = 0;
  while (mid <= last) {
    if (arr[mid] === 'B') {
      [arr[mid], arr[last]] = [arr[last], arr[mid]];
      last --;
    } else if (arr[mid] === 'R') {
      [arr[mid], arr[first]] = [arr[first], arr[mid]];
      first ++;
      mid ++;
    } else {
      mid ++;
    }
  }
  return arr;
};

function test() {
  console.log(sortThreeChars(['G', 'B', 'R', 'R', 'B', 'R', 'G']));
  console.log(sortThreeChars(['G', 'R', 'B']));
};

test();