/*
Given an array of time intervals (start, end) for classroom lectures (possibly overlapping),
find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

/* Algorithm
sort based on start time then do sliding window
loop through sorted intervals and keep track of starting class start and end - wStart
if current class start is between wStart start and end
  take max of current roomCount and wEnd - wStart
else
  wStart = wEnd
return roomCount
*/

function minRooms(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let roomCount = 1, wStart = 0;
  let wStartStart, wStartEnd, currClassStart;
  for (let wEnd = 1; wEnd < intervals.length; wEnd ++) {
    wStartStart = intervals[wStart][0];
    wStartEnd = intervals[wStart][1];
    currClassStart = intervals[wEnd][0];
    if (currClassStart < wStartEnd && currClassStart > wStartStart) {
      roomCount = Math.max(roomCount, wEnd-wStart+1);
    } else {
      wStart = wEnd;
    }
  }
  return roomCount;
};
// time complexity is linear, space complexity is constant

function test() {
  console.log(minRooms([[30, 75], [0, 50], [60, 150]]) === 2);
  console.log(minRooms([[20, 55], [30, 75], [0, 50], [60, 150]]) === 3);
};

test();