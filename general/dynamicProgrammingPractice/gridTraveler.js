/*
grid traveler

(description)
*/

/*
we want to gradually decrease the problem size
when you move, you are then asking the original question, just from your updated position
when we go right or downard, we are shrinking the playable area
structure your problem like a tree when you know that you have recursion
*/

// brute force solution
const gridTraveler1 = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler1(m-1, n) + gridTraveler1(m, n-1);
}

console.log(gridTraveler1(1, 1));
console.log(gridTraveler1(2, 3));
console.log(gridTraveler1(3, 2));
console.log(gridTraveler1(3, 3));

// solution with memoization
const gridTraveler2 = (m, n, memo = {}) => {
  const key = m + ',' + n;
  // are the arguments in the memo?
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler2(m-1, n, memo) + gridTraveler2(m, n-1, memo);
  return memo[key];
};

// this goes too slowly with brute force
console.log(gridTraveler2(19, 17));
console.log(gridTraveler2(18, 18));