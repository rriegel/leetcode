import * as fns from './addBorder.js';

let matrix1 = ['asnisdj', 'fjkbesa', 'nsadfgg', 'sskdgng'];
let matrix2 = ['Scrimblo'];
let matrix3 = ['oo', 'oo', 'pp', 'ii', 'ee'];

const test = () => {
  console.log(fns.addBorder(matrix1));
  console.log(fns.addBorder(matrix2));
  console.log(fns.addBorder(matrix3));
}

test();