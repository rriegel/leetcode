/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = candies[0];
  for (let i = 0; i < candies.length; i ++) {
      max = Math.max(max, candies[i]);
  }
  let minValid = max - extraCandies;
  let boolArr = [];
  for (let i = 0; i < candies.length; i ++) {
      if (candies[i] < minValid) {
          boolArr.push(false);
      } else {
          boolArr.push(true);
      }
  }
  return boolArr;
};