/*
You are given an array of tuples (start, end) representing time intervals for lectures. The intervals may be overlapping. Return the number of rooms that are required.

For example. [(30, 75), (0, 50), (60, 150)] should return 2.
*/
// this is  sliding window
function minRooms(intervals) {
  intervals.sort((a, b) => a[0]-b[0]);
  let wStart = 0, roomCount = 1;

  for (let wEnd = 1; wEnd < intervals.length; wEnd ++) {
    let wStartStart = intervals[wStart][0];
    let wStartEnd = intervals[wStart][1];
    let currClassStart = intervals[wEnd][0];
    if (currClassStart < wStartEnd && wStartStart < currClassStart) {
      roomCount = Math.max(roomCount, (wEnd-wStart+1));
    } else {
      wStart = wEnd;
    }
  }
  return roomCount;
};

function test() {
  console.log(minRooms([[30, 75]]) === 1);
  console.log(minRooms([[60, 150], [0, 50]]) === 1);
  console.log(minRooms([[30, 75], [0, 50], [60, 150]]) === 2);
  console.log(minRooms([[20, 55], [30, 75], [0, 50], [60, 150]]) === 3);
}

test();
