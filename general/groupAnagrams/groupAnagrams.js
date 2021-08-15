/**
 * @param {string[]} strs
 * @return {string[][]}
*/

var groupAnagrams = function(strs) {
  let sorted = [];
  for (let i = 0; i < strs.length; i ++) {
    sorted.push(strs[i].split('').sort().join(''));
  }
  let map = {};
  for (let i = 0; i < sorted.length; i ++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [i];
    } else {
      map[sorted[i]].push(i);
    }
  }
  let result = [];
  for (let key in map) {
    let currAnagram = [];
    for (let i = 0; i < map[key].length; i ++) {
      currAnagram.push(strs[map[key][i]]);
    }
    result.push(currAnagram);
  }
  return result;
};