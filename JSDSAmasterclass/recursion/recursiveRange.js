// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// pure recursion
function recursiveRange(n){
  if (n === 0) {
      return 0;
  } else {
      return n+recursiveRange(n-1);
  }
};

// helper function method
function recursiveRange(n){
  let sum = 0
  function inner(val) {
    if (val === 0) {
      return;
    } else {
      sum += val;
      inner(val-1);
    }
  }
  inner(n);
  return sum;
}