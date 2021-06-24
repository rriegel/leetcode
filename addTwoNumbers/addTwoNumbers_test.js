import addTwoNumbers from './addTwoNumbers.js';

let list1 = {
  'val': 3,
  'next': {
    'val': 4,
    'next': {
      'val': 5,
      'next': null
    }
  }
};
let list2 = {
  'val': 2,
  'next': {
    'val': 2,
    'next': {
      'val': 2,
      'next': null
    }
  }
};

var test = () => {
  console.log(addTwoNumbers(list1, list2));
};

test();