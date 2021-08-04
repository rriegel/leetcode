// brute force algorithm for averageOfSubarrayOfSizeK

function findAverages(k, arr) {
  let result = [];
  for (let i = 0; i < arr.length - k + 1; i ++) {
    // find the sum of the next k elements
    let sum = 0.0;
    for (let j = i; j < i + k; j ++) {
      sum += arr[j];
    }
    result.push(sum/k); // calculate the average
  }
  return result;
}

const result = findAverages(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size k: ${result}`);