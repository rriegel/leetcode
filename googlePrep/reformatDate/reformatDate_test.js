const reformatDate = require('./reformatDate');
const {performance} = require('perf_hooks');

var test = () => {
  console.log(reformatDate('9th Feb 1997'));
  console.log(reformatDate('4th Nov 1999'));
  console.log(reformatDate('27th Jul 2021'));

  let t1 = performance.now();
  reformatDate('9th Feb 1997')
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1)} ms`)
};

test()