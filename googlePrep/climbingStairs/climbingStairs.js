/**
 * @param {number} n
 * @return {number}
 */
// input: int that represents number of steps to climb
// output : int that represents number of ways to climb the steps stepping 1 or 2 steps
// constraints: 1 <= n <= 45
// edge cases: n = 0 ?? -> return 0

/*
// approach - brute force  (but is too slow for high inputs)
var climbStairs = function(n) {

    var climb = (i, n) => {
        if (i > n) {
            return 0;
        }
        if (i === n) {
            return 1;
        }
        return climb(i + 1, n) + climb(i + 2, n);
    };

    return climb(0, n);
};
*/

// approach - fibonacci sequence
var climbStairs = function(n) {
  if (n === 0 || n === 1) return 1;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i ++) {
      let third = first + second;
      first = second;
      second = third;
  }
  return second;
};


// approach - dynamic programming
var climbStairs = function(n) {
  if (n < 1) return 0;
  if (n == 1) return 1;
  if (n == 2) return 2;
  // a saves the second-to-last sub-state data, b saves the first sub-state data, temp saves the current state data
  let a = 1, b = 2;
  let temp = a + b;
  for (let i = 3; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
  }
  return temp;
};