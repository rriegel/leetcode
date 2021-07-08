// redoing bubbleSort

const bubbleSort = (arr) => {
  let res = [];
  let switches = 0;

  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] > arr[i+1]) {
      res.push(arr[i+1]);
      res.push(arr[i]);
      i ++;
      switches ++;
    } else {
      res.push(arr[i]);
    }
  };

  if (switches > 0) { return bubbleSort(res); }
  else { return res }
};

let arr1 = [3, 6, 2, 1, 4, 5, 19, 3];
console.log(bubbleSort(arr1));