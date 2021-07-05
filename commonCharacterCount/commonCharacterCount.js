function commonCharacterCount(s1, s2) {
  // loop through s1 and add the chars to an object
  // loop through s2 and if the char exists in the object,
    // add to commonCount and decrement value in obj

    var s1chars = {}, count = 0;

    for (var i = 0; i < s1.length; i ++) {
        if (s1chars[s1[i]]) {
            s1chars[s1[i]] ++;
        } else {
            s1chars[s1[i]] = 1;
        }
    }
    for (var i = 0; i < s2.length; i ++) {
        if (s1chars[s2[i]] > 0) {
            count ++;
            s1chars[s2[i]] --;
        }
    }
    return count;
};

export default commonCharacterCount;