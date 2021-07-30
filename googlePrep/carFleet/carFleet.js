/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
  let map = [];
  let res = 0;
  for (let i = 0; i < position.length; i ++) {
    map[target-position[i]] = (target-position[i])/speed[i];
  };
  let max = 0;
  for (let i of map) {
    if (i > max) {
      res ++;
      max = i;
    }
  }
  return res;
};