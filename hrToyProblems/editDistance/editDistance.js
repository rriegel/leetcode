// OICE
// output -> number indiciating number of operations done to str1
// input -> 2 strings
// constraints -> Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.
// edge cases -> non strings

// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(a, b) {

  if(a.length === 0) return b.length;
  if(b.length === 0) return a.length;
  var matrix = [], i, j;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i-1][j-1] + 1,
          matrix[i][j-1] + 1,
          matrix[i-1][j] + 1  )
      }
    }
  }
  return matrix[b.length][a.length];
  }