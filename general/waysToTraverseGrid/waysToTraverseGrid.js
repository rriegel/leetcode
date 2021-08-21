/*
You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.

Example:
n = 2, m = 2

This should return 2, since the only possible routes are:
Right, down
Down, right.

Here's the signature:

def num_ways(n, m):
  # Fill this in.

print num_ways(2, 2)
# 2
*/

function waysToTraverse(n, m) {
  if (n === 1 || m === 1) {
    return 1;
  }
  return waysToTraverse(n-1, m) + waysToTraverse(n, m-1);
};

function test() {
  console.log(waysToTraverse(2, 2));
  console.log(waysToTraverse(3, 3));
  console.log(waysToTraverse(4, 4));
};

test();

/*
[[0, 0],
 [0, 0]]
there are 2 ways
-------------
[[0, 0, 0,],
 [0, 0, 0,],
 [0, 0, 0,]]
there are 4 ways

[[0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0],
 [0, 0, 0, 0]]
there are 20 ways
*/