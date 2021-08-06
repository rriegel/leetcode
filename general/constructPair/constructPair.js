/*
cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

const cons = (a, b) => {
  const pair = (f) => {
    return f(a, b);
  }
  return pair;
};

const car = (pair) => {
  const returnFirst = (a, b) => {
    return a;
  }
  return pair(returnFirst);
};

const cdr = (pair) => {
  const returnSecond = (a, b) => {
    return b;
  }
  return pair(returnSecond);
};

let pair1 = cons(3, 4);

let carTest = car(pair1);
console.log(carTest);

let cdrTest = cdr(pair1);
console.log(cdrTest);