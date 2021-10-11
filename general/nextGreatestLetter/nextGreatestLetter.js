/*
744. Find Smallest Letter Greater Than Target

Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
Note that the letters wrap around.
For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

Example 1:
Input: letters = ["c","f","j"], target = "a"
Output: "c"

Example 2:
Input: letters = ["c","f","j"], target = "c"
Output: "f"

Example 3:
Input: letters = ["c","f","j"], target = "d"
Output: "f"

Example 4:
Input: letters = ["c","f","j"], target = "g"
Output: "j"

Example 5:
Input: letters = ["c","f","j"], target = "j"
Output: "c"

*/

function nextGreatestLetter(letters, target) {
  target = target.charCodeAt(0) - 97;
  const n = letters.length - 1;
  if ((letters[0].charCodeAt(0) - 97) > target || target > (letters[n].charCodeAt(0) - 97)) {
    return letters[0];
  } else {
    for (let i = n; i > 0; i --) {
      if ((letters[i-1].charCodeAt(0) - 97) <= target) {
        if ((letters[i].charCodeAt(0) - 97) === target) {
          return letters[i+1] ? letters[i+1] : letters[0];
        } else {
          return letters[i];
        }
      }
    }
  }
};

function test() {
  console.log(nextGreatestLetter(["c","f","j"], "a") === "c");
  console.log(nextGreatestLetter(["c","f","j"], "c") === "f");
  console.log(nextGreatestLetter(["c","f","j"], "d") === "f");
  console.log(nextGreatestLetter(["c","f","j"], "g") === "j");
  console.log(nextGreatestLetter(["c","f","j"], "j") === "c");
};

test();