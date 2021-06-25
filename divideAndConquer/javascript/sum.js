/*
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
*/
// write out the code for the recursive sum D&C function
const sum = (array) => {
  let result = 0;
  // recursive case
  if (array.length) {
    let newAdd = array.shift();
    return result + newAdd + sum(array);
  // base case
  } else {
    return 0;
  }
};
export default sum;