/*
You are given an array of intervals - that is, an array of tuples (start, end). The array may not be sorted, and could contain overlapping intervals. Return another array where the overlapping intervals are merged.

For example:
[(1, 3), (5, 8), (4, 10), (20, 25)]

This input should return [(1, 3), (4, 10), (20, 25)] since (5, 8) and (4, 10) can be merged into (4, 10).

Here's a starting point:

def merge(intervals):
  # Fill this in.

print merge([(1, 3), (5, 8), (4, 10), (20, 25)])
# [(1, 3), (4, 10), (20, 25)]
*/
// create result array
// sort input array based on interval start
// loop through sorted intervals with a sliding window approach
  // compare firstEnd to currStart
    // if they overlap --> update currEnd
  // otherwise - push firstStart and currEnd into new tuple in result array

const merge1 = (intervals) => {
  let merged = [];
  intervals = intervals.sort((a, b) => {
    let [start1, end1] = a;
    let [start2, end2] = b;
    return start1 - start2;
  });

  let [firstStart, firstEnd] = intervals[0];
  for (let i = 1; i < intervals.length; i ++) {
    let [currStart, currEnd] = intervals[i];
    if ( currStart > firstEnd ) {
      merged.push([firstStart, firstEnd]);
      firstStart = currStart;
      firstEnd = currEnd;
    } else {
      firstEnd = Math.max(firstEnd, currEnd);
    }
    if (!intervals[i+1]) {
      merged.push([firstStart, currEnd]);
    }
  }
  return merged;
};

var merge2 = function(intervals) {
  intervals.sort((a, b) => {
    let [start1, end1] = a;
    let [start2, end2] = b;
    return start1 - start2;
  });
  const merged = [];
  merged.push(intervals[0]);
  for (let i = 1; i < intervals.length; i ++) {
    let [currStart, currEnd] = intervals[i];
    let updated = false;
    for (let j = 0; j < merged.length; j ++) {
      let [currMergedStart, currMergedEnd] = merged[j];
      if (currStart >= currMergedStart && currEnd <= currMergedEnd) {
        merged[j][0] = Math.min(currStart, currMergedStart);
        merged[j][1] = Math.max(currEnd, currMergedEnd);
        updated = true;
      } else if (currEnd >= currMergedEnd && currStart <= currMergedEnd) {
        merged[j][1] = Math.max(currEnd, currMergedEnd);
        updated = true;
      } else if (currStart <= currMergedStart && currEnd >= currMergedStart) {
        merged[j][0] = Math.min(currStart, currMergedStart);
        updated = true;
      }
    }
    if (!updated) {
      merged.push(intervals[i]);
    }
  }
  return merged;
};

const test = () => {
  console.log(merge1([ [1, 3], [5, 8], [4, 10], [20, 25] ])); // --> [ [1,3], [4,10], [20,25] ]
  console.log(merge2([ [1, 3], [5, 8], [4, 10], [20, 25], [21, 27] ])); // --> [ [1,3], [4,10], [20,27] ]
};

test();