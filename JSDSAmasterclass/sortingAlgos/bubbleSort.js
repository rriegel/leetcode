let {performance} = require('perf_hooks');
/*
Implement an iterative bubble sort function
*/

// naive solution
function bubbleSortNaive(arr) {
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
};

// this is the optimized solution --> added swap tracker to break if there is no swaps in the previous pass (that means it's sorted)
// time complexity is O(n^2)
// if the input is NEARLY SORTED - time complexity is O(n) at best case
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i --) {
    let swap = false;
    for (let j = 0; j < i-1; j ++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        swap = true
      }
    }
    if (!swap) break;
  }
  return arr;
};

function test() {
  let t1 = performance.now();
  JSON.stringify(bubbleSortNaive([43, 12, 65, 3, 24, 8, 9])) === JSON.stringify([3, 8, 9, 12, 24, 43, 65]);
  let t2 = performance.now();

  let t3 = performance.now();
  JSON.stringify(bubbleSort([43, 12, 65, 3, 24, 8, 9])) === JSON.stringify([3, 8, 9, 12, 24, 43, 65]);
  let t4 = performance.now();

  console.log(`~~~~~~~~~~~~~~~\n~~~~~~~~~~\n~~~~~\nNaive Solution runtime: ${t2-t1} ms.\n-----------------------------------------------------`);
  console.log(`Optimized Solution runtime: ${t4-t3} ms.\n~~~~~\n~~~~~~~~~~\n~~~~~~~~~~~~~~~`);
};

test();