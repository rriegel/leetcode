// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let last = arr.pop();
    return last*productOfArray(arr);
  }
};