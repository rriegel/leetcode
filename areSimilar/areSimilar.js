/*
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
*/

function areSimilar(a, b) {
  if (a.toString() == b.toString()) {
      return true;
  }
  let c = [], d = [];
  for (let i = 0; i < a.length; i ++) {
      if (a[i] !== b[i]) {
          c.push(a[i]);
          d.push(b[i]);
      }
  }
  c = c.reverse();
  if (c.length === 2 && (c.toString() == d.toString())) {
      return true;
  }
  return false;
}

export default areSimilar;