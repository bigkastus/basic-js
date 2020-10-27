const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  if (typeof(members) !== 'object' || members === null) return false;
  let myarr = '';
  for (let i = 0; i < members.length; i++){
    if (typeof(members[i]) === 'string'){
      myarr = myarr + members[i].trim()[0];
    } 
    
    
  }
  return myarr = myarr.toUpperCase().split('').sort().join('');
};
