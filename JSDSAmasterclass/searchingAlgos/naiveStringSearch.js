function stringSearch(str, target) {
  let matches = 0;
  for (let i = 0; i < str.length; i ++) {
    if (str.charAt(i) === target[0]) {
      for (let j = 0; j < target.length; j ++) {
        if (str.charAt(i+j) !== target[j]) break;
        if (j === target.length-1) matches ++;
      }
    }
  }
  return matches;
};

function test() {
  console.log(stringSearch('how about now', 'now')); // 1
  console.log(stringSearch('ababab', 'ab')); // 3
  console.log(stringSearch('aeoiu', 'y')); // 0
};

test()