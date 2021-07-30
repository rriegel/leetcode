/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
// approach - map - time O(n) space O(n)
var carFleet = function(target, position, speed) {

  let n = position.length, cars = [], res = 0;

  if (n < 2) {
    return n;
  }
  for (let i = 0; i < position.length; i ++) {
    let arriveT = (target-position[i])/speed[i];
    cars.push([position[i], arriveT]);
  }
  cars.sort((a, b) => a[0]-b[0]);

  for (let j = n-1; j > 0; j --) {
    // if the arrival time of the closer car is lower than that of the further away car
    if (cars[j][1] < cars[j-1][1]) {
      res ++;
    // else (the cars will meet)
    } else {
      // update car arrival time
      cars[j-1][1] = cars[j][1];
    }
  }
  return res+1; // because the loop just increments between fleets
};

module.exports = carFleet;