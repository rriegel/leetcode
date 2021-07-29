/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  let merged = [];
  merged.push(intervals[0]);
  for (let i = 1; i < intervals.length; i ++) {
    let currStart = intervals[i][0];
    let currEnd = intervals[i][1];
    let updated = false;
    for (let j = 0; j < merged.length; j ++) {
      let currMergedStart = merged[j][0];
      let currMergedEnd = merged[j][1];
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

module.exports = merge;
