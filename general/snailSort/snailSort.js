/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

var snailSort = (array) => {
  if (array.length === 0) {
    return [[]];
  } else {
    var result = [];
    while (array.length > 0) {
      var top = array.shift();
      for (var i = 0; i < top.length; i ++) {
        result.push(top[i])
      }
      if (array.length === 0) {break}
      var h = array.length-1;
      for (var i = 0; i < h; i ++) {
        result.push(array[i].pop())
      }
      if (array.length === 0) {break}
      var bottom = array.pop().reverse();
      for (var i = 0; i < bottom.length; i ++) {
        result.push(bottom[i])
      }
      if (array.length === 0) {break}
      var h = array.length-1;
      for (var i = h; i >= 0; i --) {
        result.push(array[i].shift())
      }
    }
    return result;
  }
};

export default snailSort;