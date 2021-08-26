/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Example 3:
Input: height = [4,3,2,1,4]
Output: 16

Example 4:
Input: height = [1,2,1]
Output: 2
*/

// two pointer solution - changing the i and j pointers depending on which one represents the shorter height
// time complexity - O(n)
// space complexity - O(1)
var maxArea = function(height) {
  let maxArea = 0, i = 0, j = height.length-1, h, w;
  while (i < j) {
    h = Math.min(height[i], height[j]);
    w = j - i;
    maxArea = Math.max(maxArea, h*w);
    if (height[i] < height[j]) {
      i ++;
    } else {
      j --;
    }
  }
  return maxArea;
};