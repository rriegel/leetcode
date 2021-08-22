/*
Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].
*/

/*
approach-
turn dictionary into an object for instant lookup
loop through the string and cut out the substrings when they match a prop in the dict
remove that word from the dict to avoid repeated words
we're return the words in an array so we can push the substrinigs into a result array
*/

// linear time complexity O(n)
// O(n+m) space complexity where n is the dictionary size and m is the string length
function reconstruct(dict, str) {
  let dictMap = {};
  for (word of dict) dictMap[word] = true;
  let res = [];
  let currStr = "";
  for (char of str) {
    currStr += char;
    if (dictMap[currStr] === true) {
      res.push(currStr);
      delete dictMap[currStr];
      currStr = "";
    }
  }
  return res;
};

function test() {
  console.log(reconstruct(['quick', 'brown', 'the', 'fox'], "thequickbrownfox"));
  console.log(reconstruct(['bed', 'bath', 'bedbath', 'and', 'beyond'], "bedbathandbeyond"));
};

test();