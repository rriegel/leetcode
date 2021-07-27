/**
 * @param {string} date
 * @return {string}
 */

var reformatDate = function(date) {
  let mm = {'Jan': '01','Feb': '02','Mar': '03','Apr': '04','May': '05','Jun': '06','Jul': '07','Aug': '08','Sep': '09','Oct': '10','Nov': '11','Dec': '12'};
  date = date.split(" ");
  date[0] = date[0].split('').filter(char => char.match(/[0-9]/)).join('');
  if (date[0].length===1) {date[0] = '0' + date[0]}
  date[1] = mm[date[1]];
  date.reverse();
  return date.join('-');
};

module.exports = reformatDate;
