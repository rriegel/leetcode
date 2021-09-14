/*
Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).
*/

function rand(max) {
  return Math.floor(Math.random() * max);
};

function test() {
  console.log(rand(5));
  console.log(rand(25))
};

test();