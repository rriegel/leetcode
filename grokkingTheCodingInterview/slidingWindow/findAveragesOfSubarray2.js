// sliding window algorithm for averageOfSubarrayOfSizeK

function findAverages(k, arr) {
  const result = [];
  let windowSum = 0.0, windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd ++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we dont need to slide if weve not hit the required window size of 'k'
    if (windowEnd >= k-1) {
      result.push(windowSum/k); // calculate average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart ++; // slide the window ahead
    }
  }
  return result;
};

const result = findAverages(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size k: ${result}`);