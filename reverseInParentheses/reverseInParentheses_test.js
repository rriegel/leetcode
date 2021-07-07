import reverseInParentheses from './reverseInParentheses.js';

let test1 = '(bar)',
    test2 = 'spon(geb)ob',
    test3 = 'elaasd(asdf(hnnf))kk';

var test = () => {
  console.log(reverseInParentheses(test1));
  console.log(reverseInParentheses(test2));
  console.log(reverseInParentheses(test3));
}

test();