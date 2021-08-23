let {performance} = require('perf_hooks');
/*
Implement selection sort
*/

// time complexity is O(n^2) so not too good
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i ++) {
    let min = i;
    for (let j = i+1; j < arr.length; j ++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

function test() {
  let t1 = performance.now();
  console.log(selectionSort([43, 12, 65, 3, 24, 8, 9]));
  let t2 = performance.now();

  console.log(`~~~~~~~~~~~~~~~\n~~~~~~~~~~\n~~~~~\nNaive Solution runtime: ${t2-t1} ms.\n-----------------------------------------------------`);
};

test();