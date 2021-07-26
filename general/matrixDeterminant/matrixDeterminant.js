// explanation at https://coderbyte.com/tutorial/determinant-of-a-matrix-in-javascript-using-laplace-expansion

// this can be solved with recursion
  // if the matrix is 1x1 - return the element
  // if the matrix is 2x2 - return (a*d - b*c)
  // else - pop the row and column of each top element and take determinant of remaining in matrix
function removeEl(M,index) {
    var temp = [];
    for (var i=0; i<M.length; i++) { temp.push(M[i].slice(0)); }
    temp.splice(0,1);
    for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); }
    return temp;
};

function determinant(m) {
  // return the determinant of the matrix passed in
  if (m[0].length === 1) { return m[0][0]; }
  if (m[0].length === 2) {
    return ((m[0][0]*m[1][1]) - (m[0][1]*m[1][0]));
  }
  var answer = 0;
  for (var i = 0; i < m[0].length; i ++) {
    answer += Math.pow(-1,i) * m[0][i] * determinant(removeEl(m,i));
  }
  return answer;
};

export default determinant;