/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {

  // // NAIVE SOLUTION
  // // negative case
  // if (n < 0) {
  //     n = Math.abs(n);
  //     x = 1 / x;
  // }
  // var total = 1;
  // while (n > 0) {
  //     total = total * x;
  //     n --;
  // }
  // return total;

  // DIVIDE AND CONQUER SOLUTION WITH MEMOIZATION
  // negative case
  if (n < 0) {
      n = Math.abs(n);
      x = 1 / x;
  }

  let calc = new Map();

  var recursePow = (num, pow) => {
      if (pow === 1) { return num };
      if (calc.has(pow)) { return calc.get(pow) };

      let val1 = Math.floor(pow / 2);
      let val2 = pow - val1;
      calc.set(pow, recursePow(num, val1) * recursePow(num, val2));
      return calc.get(pow);
  };

  let res = n > 0 ? recursePow(x, n) : 1;
  return res.toFixed(4);
};

/*
             2^6
          2^3 * 2^3
       2^2 * 2^2 * 2^2
2^1 * 2^1 * 2^1 * 2^1 * 2^1 * 2^1
*/

export default myPow;