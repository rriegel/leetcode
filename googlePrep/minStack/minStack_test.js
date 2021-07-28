const MinStack = require('./minStack');
const {performance} = require('perf_hooks');

var test = () => {
  let stack = new MinStack;
  console.log(stack);
  stack.push(3);
  stack.push(-2);
  console.log('top: ', stack.top());
  console.log('min: ', stack.getMin());
  stack.pop();
  console.log('min: ', stack.getMin());
  stack.push(-1);
  console.log('top: ', stack.top());
  console.log(stack);
};

test();
