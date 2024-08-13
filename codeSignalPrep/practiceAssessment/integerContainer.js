const IntegerContainerInterface = require('./integerContainerInterface');

class IntegerContainer extends IntegerContainerInterface {
  constructor() {
    super();
    // TODO: implement
    this.integers = {};
  }
  
  countInts() {
    let totalCount = 0;
    for (let num in this.integers) {
      totalCount += this.integers[num].count;
    }
    return totalCount;
  }
  
  // TODO: implement interface methods here
  add(integer) {
    if (this.integers[integer] === undefined) {
      this.integers[integer] = {"count": 1};
    } else {
      this.integers[integer].count = this.integers[integer].count + 1;
    }
    
    return this.countInts();
  }
  
  delete(integer) {
    if (this.integers[integer] === undefined) {
      return false;
    } else {
      if (this.integers[integer].count === 1) {
        delete this.integers[integer];
      } else {
        this.integers[integer].count = this.integers[integer].count - 1;
      }
      return true;
    }
  }
  
  getMedian() {
    if (Object.keys(this.integers).length === 0) {
      return null;
    }
    const array = [];
    for (let int in this.integers) {
      for (let i = 0; i < this.integers[int].count; i ++) {
        array.push(int);
      }
    }
    
    array.sort((a, b) => {return a - b});
    let median = Math.floor(array.length/2);
    if (array.length % 2 === 0) {
      return Number(array[median - 1]);
    }
    return Number(array[median]);
  }
}

module.exports = IntegerContainer;
