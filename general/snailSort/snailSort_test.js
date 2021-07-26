import snailSort from './snailSort.js';

var test = () => {
  console.log(snailSort([[]]));
  console.log(snailSort([[1]]));
  console.log(snailSort([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
  console.log(snailSort([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
  console.log(snailSort([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
}

test();