/*
Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/

// we want to find the smallest number and the largest number behind it
// brute force - nested loop to check every pair of number with the numbers behind and track maximum difference
// two pointer - keep a pointer at your buyPrice and continuously update maxDiff between buy and sell price
  // if the currentPrice is lower than the buyPrice, move buyPrice pointer
function maxProfit(nums) {
  let buy = 0, sell = 1, maxProfit = -Infinity, currProfit;
  while (sell < nums.length) {
    currProfit = nums[sell] - nums[buy];
    maxProfit = Math.max(currProfit, maxProfit);

    if (nums[sell] < nums[buy]) buy = sell;

    sell ++;
  }
  return maxProfit;
};

function test() {
  console.log(maxProfit([9, 11, 8, 5, 7, 10]) === 5);
  console.log(maxProfit([9, 15, 8, 5, 7, 10]) === 6);
  console.log(maxProfit([9, 15, 8, 5, 1, 10]) === 9);
};

test();
