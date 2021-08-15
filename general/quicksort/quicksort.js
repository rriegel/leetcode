const quicksort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0], less = [], greater = [];
    for (let i = 1; i < arr.length; i ++) {
      if (arr[i] <= pivot) less.push(arr[i]);
      else greater.push(arr[i]);
    }
    return quicksort(less).concat(pivot).concat(quicksort(greater));
  }
}

module.exports = quicksort;