const myPow = require('./pow');

var test = () => {
  let num = 729;
  console.log(myPow(3, 6) === num.toFixed(4));
  num = 1024;
  console.log(myPow(2, 10) === num.toFixed(4));
  num = 1;
  console.log(myPow(203, 0) === num.toFixed(4));
  num = 1/243;
  console.log(myPow(3, -5) === num.toFixed(4));
}

test();