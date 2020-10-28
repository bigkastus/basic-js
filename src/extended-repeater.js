const CustomError = require("../extensions/custom-error");

module.exports = function repeater(/* str, options */) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  

// options = { repeatTimes: 1, separator: '+', addition: '|', additionRepeatTimes: 1, additionSeparator: '' }; 
// str = (str !==  'string') ? str.toString() : str;
// addition = ('addition' !==  'string') ? 'addition'.toString() : 'addition';
// str = str.split(options['separator']).push(options['addition']);
// return str;