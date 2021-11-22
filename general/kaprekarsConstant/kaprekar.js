/*
Kaprekar's Constant is the number 6174. This number is special because it has the property where for any 4-digit number that has 2 or more unique digits, if you repeatedly apply a certain function it always reaches the number 6174.

This certain function is as follows:
- Order the number in ascending form and descending form to create 2 numbers.
- Pad the descending number with zeros until it is 4 digits in length.
- Subtract the ascending number from the descending number.
- Repeat.

Given a number n, find the number of times the function needs to be applied to reach Kaprekar's constant.
*/

function functionsUntilKaprekar(n, f=0) {
  if (n.toString().length > 4) throw new Error("The length of 'n' is greater than 4")
  if (n === 6174) return f;

  const asc = n.toString().split('').sort((a,b) => a-b);
  const des = n.toString().split('').sort((a,b) => b-a);

  while (des.length < 4) des.push('0');

  const res = Number(des.join('') - asc.join(''));
  f += 1;

  return functionsUntilKaprekar(res, f);
}

function test() {
  console.log(functionsUntilKaprekar(6174) === 0);
  console.log(functionsUntilKaprekar(123) === 3);
  console.log(functionsUntilKaprekar(1600) === 7);
  // console.log(functionsUntilKaprekar(12600) === 7);
};

test();
