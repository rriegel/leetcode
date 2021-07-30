// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(x, n){
  if (n === 0) {
    return 1;
  } else {
    return x*power(x, n-1);
  }
};

