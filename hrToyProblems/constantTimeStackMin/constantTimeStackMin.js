/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 // pseudoclassical instantiation
 var Stack = function() {
  this.storage = {}
  this.someInstance = {};
  this.counter = 0;
  // add an item to the top of the stack
};


Stack.prototype.push = function(value) {
  // assign storage at counter to value
  this.storage[this.counter] = value;
  // increment counter
  this.counter ++
  // return counter
  return this.counter;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  // if counter is 0
  if (this.counter === 0) {
    // return undefined
    return undefined;
  }
  // decrement counter
  this.counter --;
  // set popped variable
  var popped = this.storage[this.counter];
  // delete the value set to popped
  delete this.storage[this.counter];
  // return popped
  return popped;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  // return counter value
  return this.counter;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  // set a min value at the first storage value
  var min = this.storage[0];
  // loop through storage
  for (var key in this.storage) {
    // if current value is less than min
    if (this.storage[key] < min) {
      // set min value to current
      min = this.storage[key];
    }
  }
  // return min
  return min;
};

//tests
// debugger;
// var newStack = new Stack();
// newStack.push('a');
// newStack.push('b');
// newStack.push('c');