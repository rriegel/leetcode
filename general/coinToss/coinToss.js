/*
Assume you have access to a function toss_biased() which returns 0 or 1 with a probability that's not 50-50 (but also not 0-100 or 100-0).
You do not know the bias of the coin.

Write a function to simulate an unbiased coin toss.
*/

function unbiasedCoinToss() {
  let rnd = Math.random();
  if (rnd < 0.5) {
    return 'H';
  } else {
    return 'T';
  }
};

function test() {
  let heads = 0;
  let tails = 0;
  for (let i = 0; i < 1000; i ++) {
    if (unbiasedCoinToss() === 'H') {
      heads ++;
    } else {
      tails ++;
    }
  }
  console.log('Unbiased Coin Toss');
  console.log(`H: ${((heads/1000)*100).toFixed(2)} %`);
  console.log(`T: ${((tails/1000)*100).toFixed(2)} %`);
};

test();