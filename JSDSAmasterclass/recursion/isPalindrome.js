// non recursive solution
/*
function isPalindrome(str) {
  let leftStr = "";
  let rightStr = "";
  if (str.length % 2 === 1) {
    let mid = Math.floor((str.length-1)/2);
    leftStr = str.substring(0, mid);
    rightStr = str.substring(mid+1).split('').reverse().join('');
  } else {
    let mid = (str.length-1)/2;
    leftStr = str.substring(0, mid);
    rightStr = str.substring(mid).split('').reverse().join('');
  }
  console.log(leftStr, rightStr)
  if (leftStr === rightStr) return true;
  return false;
}
*/
// recursive solution
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false