// implement the MinStack class
// MinStack()
// push(val) → returns none
// pop() → returns none
// top() → returns the top element in the stack
// getMin() → returns the min element in the stack
// constraint→ retrieve minElement in constant time
var MinStack = function() {
  this.storage = [];
  this.min = [];
};
MinStack.prototype.push = function(val) {
  this.storage.push(val);
  if (this.min.length === 0 || val <= this.min[this.min.length-1]) {
      this.min.push(val);
  };
};
MinStack.prototype.pop = function() {
  let temp = this.storage[this.storage.length-1]
  this.storage.pop();
  if (temp === this.min[this.min.length-1]) {
      this.min.pop();
  }
};
MinStack.prototype.top = function() {
  return this.storage[this.storage.length-1];
};
MinStack.prototype.getMin = function() {
  return this.min[this.min.length-1];
};
module.exports = MinStack;
/*
var stack = new MinStack();
stack.push(5);
stack.pop();
stack.push(6);
stack.top();
stack.push(3);
stack.getMin();
*/




/*
var stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
stack.getMin();
stack.pop();
stack.top();
stack.getMin();

Storage, min
[], null
[-2], -2
[-2, 0], -2
[-2, 0, -3], -3
-3
[-2, 0] -3
*/
