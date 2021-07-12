//o: int
//i: array
//c: length and size
//e: if its already increasing, if its not an array

// you can only add to the numbers
function arrayChange(a) {
  // check if array
  if (!Array.isArray(a)) {
      // if not return false
      return 'Not an array';
  }
  let moves = 0;
  // loop through the array
  for (let i = 1; i < a.length; i ++) {
      // if the element is not stricly increasing find the number that would have to be added
      if (a[i] <= a[i-1]) {
          let add = a[i-1] - a[i] + 1;
          // adjust the array val
          a[i] = a[i] + add;
          // add that number to a counter var
          moves += add;
      }
  };
  return moves;
};

export default arrayChange;