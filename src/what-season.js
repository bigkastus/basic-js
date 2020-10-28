const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  // date = new Date();
  if (date === undefined) return 'Unable to determine the time of year!';
  if (date == false) throw new Error ('Error');
  // if (date.getMonth() < 0  && date.getMonth() >11 ) {
  //   throw new Error ('Error');
  // }
  else if ( date.getFullYear().length < 4 ){
    throw new Error ('Error');
  }
  else if (date.getMonth() > 1 && date.getMonth() < 5 ){
    return 'spring';
  }
  else if (date.getMonth() > 4 &date.getMonth() < 8 ){
    return 'summer'
  }
  else if (date.getMonth() > 7 && date.getMonth() < 11 ){
    return 'autumn'
  }
  return 'winter'
};
