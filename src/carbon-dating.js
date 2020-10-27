const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {  
  // remove line with error and write your code here
  if (sampleActivity === NaN || typeof(parseInt(sampleActivity, 10)) !== 'number' || parseInt(sampleActivity, 10) < 0 ) {
    return false;
  }
  const k = 0.693/HALF_LIFE_PERIOD;
  const result = Math.log(MODERN_ACTIVITY/sampleActivity);
  const finresult = Math.round(result);  
  return finresult;
};
