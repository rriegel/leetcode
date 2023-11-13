// 605. Can Place Flowers

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  // make a variable to increment
  let flowersPlaced = 0;
  // loop through the flowerbed array
  for (let i = 0; i < flowerbed.length; i ++) {
      // check if a zero value has zeros on either side
      let currIsEmpty = flowerbed[i] === 0;
      let noAdjacentFlowers = (flowerbed[i-1] === 0 || i-1 < 0)
                                  && (flowerbed[i+1] === 0 || i+1 >= flowerbed.length);
      if (currIsEmpty && noAdjacentFlowers) {
          // increment flowersPlaced
          flowersPlaced ++;
          // change value to 1
          flowerbed[i] = 1;
      }
      // if incrementor is >= n
      if (flowersPlaced >= n) {
          // break and return true
          return true;
      }
  }
  // return false
  return false;
};
