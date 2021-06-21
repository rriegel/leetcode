import selectionSort from './selectionSort.js';

var list1 = [];
var list2 = [1, 2, 3, 4];
var list3 = [500, 3005, 365, 404, 69, 101, 200];

var test = () => {
  console.log(selectionSort(list1));
  console.log(selectionSort(list2));
  console.log(selectionSort(list3));
};

test();