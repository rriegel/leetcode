/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
reverseInParentheses(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
reverseInParentheses(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
reverseInParentheses(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
reverseInParentheses(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function reverseOnce(s){
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr.split('').reverse().join('');
  return s.replace(regexp, subStr)
};

function reverseInParentheses(s) {
  if (s.includes('(')){
      return reverseInParentheses(reverseOnce(s));
  } else {
      return s;
  }
};

export default reverseInParentheses;