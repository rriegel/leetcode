// using javascript's Array.sort() method can be used to accurately sort numbers using a comparator function

function sortDemo(arr) {
  let notSorted = arr.sort();
  console.log('sort() with no comparator: ', notSorted);
  let sortedAsc = arr.sort((a, b) => {return a - b});
  console.log('sort(a - b): ', sortedAsc);
  let sortedDesc = arr.sort((a, b) => {return b - a});
  console.log('sort(b - a): ', sortedDesc);
};

let array1 = [403, 11, 647, 5, 35, 232, 1];


//-------------------------------------------------------------------------------------- tests

function test() {
    console.log(sortDemo(array1));
};

test();