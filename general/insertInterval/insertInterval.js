/*
57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 
Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let left = newInterval[0];
  let right = newInterval[1];

  for (let i = 0; i < intervals.length; i ++) {
      if (left >= intervals[i][0] && left <= intervals[i][1]) {
          left = Math.min(intervals[i][0], left);
          right = Math.max(intervals[i][1], right);
          // remove
          intervals.splice(i, 1);
          i --;
          continue;
      }

      if (right >= intervals[i][0] && right <= intervals[i][1]) {
          left = Math.min(intervals[i][0], left);
          right = Math.max(intervals[i][1], right);
          // remove
          intervals.splice(i, 1);
          i --;
          continue;
      }

      if (intervals[i][0] >= left && intervals[i][0] <= right) {
          left = Math.min(intervals[i][0], left);
          right = Math.max(intervals[i][1], right);
          // remove
          intervals.splice(i, 1);
          i --;
          continue;
      }

      if (intervals[i][1] >= left && intervals[i][1] <= right) {
          left = Math.min(intervals[i][0], left);
          right = Math.max(intervals[i][1], right);
          // remove
          intervals.splice(i, 1);
          i --;
          continue;
      }
  }

  intervals.push([left, right]);

  intervals.sort((a, b) => a[0] - b[0]);

  return intervals;
};

// big O notation
// O(n) time
// O(1) space