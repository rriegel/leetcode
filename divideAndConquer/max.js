/*
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
*/
// Write a recursive function to find the maximum number in a list

var max = function(list) {
  var biggest = list[0];
  if (arguments[1]) {
    biggest = biggest > arguments[1] ? biggest : arguments[1];
  }
  if (list.length !== 0) {
    list.shift();
    return max(list, biggest);
  } else {
    return biggest;
  }
};
/*
found out that arrow functions do not have the arguments object
rest parameters are the workaround but I didn't have luck implementing that
*/
export default max;