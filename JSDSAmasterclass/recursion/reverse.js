function reverse(str){
  if (str === "") {
      return "";
  } else {
      let l = str.length-1;
      return str[l] + reverse(str.substring(0,l));
  }
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('amgil'))