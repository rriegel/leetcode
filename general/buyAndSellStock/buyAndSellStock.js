/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:
1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

// sliding window
// create a maxProfit and a currProfit var
// loop through the prices
  // wStart will stand in for the buy price
  // wEnd will continue to loop and look for the highest sell price
  // take max of currProfit and profit with current i
  // take max of maxProfit and currProfit
// return maxProfit or 0 (if less than 0)
var maxProfit = function(prices) {
  let maxProfit = 0, currProfit = 0, buyPrice = prices[0];

  for (let sellPrice = 1; sellPrice < prices.length; sellPrice ++) {
    if (buyPrice > prices[sellPrice]) {
      buyPrice = prices[sellPrice];
    }
    currProfit = Math.max(currProfit, prices[sellPrice] - buyPrice);
    maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxProfit;
};
// time - O(n) we are only looping once
// space - O(1) because we are not creating any scaling vars