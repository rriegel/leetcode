/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let currProfit = 0;
  let buyPrice = prices[0];
  
  for (let sellPrice = 1; sellPrice < prices.length; sellPrice ++) {
    if (prices[sellPrice] < buyPrice) {
      buyPrice = prices[sellPrice];
    }
    currProfit = Math.max(currProfit, prices[sellPrice] - buyPrice);
    maxProfit = Math.max(maxProfit, currProfit);
  }
  return maxProfit;
};