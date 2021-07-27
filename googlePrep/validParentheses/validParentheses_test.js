const isValid = require('./validParentheses');

var case1 = "()";
var case2 = "()[]{}";
var case3 = "(]";
var case4 = "([)]";
var case5 = "{[]}";

var test = () => {
  console.log(isValid(case1) === true);
  console.log(isValid(case2) === true);
  console.log(isValid(case3) === false);
  console.log(isValid(case4) === false);
  console.log(isValid(case5) === true);
};

test();