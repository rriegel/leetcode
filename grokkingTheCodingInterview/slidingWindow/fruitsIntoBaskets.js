/*
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

Example 2:
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// this is a sliding window problem because your counting has to be done in the order of the array and you can't skip letters
// the goal is the return the highest number of fruits if you have 2 baskets and can only put 1 fruit type in each basket
// return the highest number of fruits given these constraints

function highestFruits(arrOfTrees) {
  let windowStart = 0;
  let maxFruit = 0;
  let fruitMap = {};
  for (let windowEnd = 0; windowEnd < arrOfTrees.length; windowEnd ++) {
    let currentFruit = arrOfTrees[windowEnd];
    fruitMap[currentFruit] = fruitMap[currentFruit] + 1 || 1;

    while (Object.keys(fruitMap).length > 2) {
      let firstFruit = arrOfTrees[windowStart];
      if (fruitMap[firstFruit] === 1) {
        delete fruitMap[firstFruit];
      } else {
        fruitMap[firstFruit] --;
      }
      windowStart ++;
    }
    maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1);
  }
  return maxFruit;
};

function test() {
  console.log(highestFruits(['A', 'B', 'C', 'A', 'C']) === 3);
  console.log(highestFruits(['A', 'B', 'C', 'B', 'B', 'C']) === 5);
};

test();