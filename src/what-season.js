const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (date === undefined) return 'Unable to determine the time of year!';
  // date === undefined ? 'Unable to determine the time of year!' : 'ok';
  if (date[1] < 1 && date[1] >12) {
    return 'Error'  
  }
  else if (date[1] > 2 && date[1] < 6 ){
    return 'spring'
  }
  else if (date[1] > 5 && date[1] < 9 ){
    return 'summer'
  }
  else if (date[1] > 8 && date[1] < 12 ){
    return 'autumn'
  }
  return 'summer'
};
