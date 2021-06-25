/*
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
*/
// Write a recursive function to count the number of items in a list

const count = (list) => {
  if (list.length === 0) {
    return 0;
  } else {
    list.shift()
    return 1 + count(list);
  }
};

export default count;
