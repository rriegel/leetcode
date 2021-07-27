const reformatDate = require('./reformatDate');
const {performance} = require('perf_hooks');

var test = () => {
  console.log(reformatDate('9th Feb 1997') === '1997-02-09');
  console.log(reformatDate('4th Nov 1999') === '1999-11-04');
  console.log(reformatDate('27th Jul 2021') === '2021-07-27');

  let t1 = performance.now();
  reformatDate('9th Feb 1997')
  let t2 = performance.now();
  console.log(`Time Elapsed: ${(t2 - t1)} ms`)
};

test()