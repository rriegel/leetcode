function chessBoardCellColor(cell1, cell2) {
  cell1 = cell1.split('');
  cell2 = cell2.split('');
  let a = 97;
  let charArray = {};
  for (var i = 0; i<26; i++) charArray[String.fromCharCode(a + i)] = i;
  cell1[0] = charArray[cell1[0].toLowerCase()];
  cell2[0] = charArray[cell2[0].toLowerCase()];
  let sum1 = cell1[0] + Number(cell1[1]);
  let sum2 = cell2[0] + Number(cell2[1]);
  if (Math.abs(sum1-sum2)%2===1) return false;
  return true;
};

function test() {
  console.log(chessBoardCellColor('A2', 'C3') === false);
  console.log(chessBoardCellColor('A2', 'C4') === true);
  console.log(chessBoardCellColor('E5', 'D4') === true);
};

test();