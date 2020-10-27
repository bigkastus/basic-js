const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {  
  const k = 0.693/HALF_LIFE_PERIOD;
  const result = Math.log(MODERN_ACTIVITY/sampleActivity);
  const finresult = Math.round(result); 
  if(typeof(sampleActivity) !== "string"){
    return false;
  } 
  else if (parseInt(sampleActivity, 10) > 0 && 
      parseInt(sampleActivity, 10) <= 15 ) {
        if (finresult <= 30) false;
        return finresult;
  }
  
  return false;  
  // if (sampleActivity === false || 
  //     typeof(parseInt(sampleActivity, 10)) !== 'number' || 
  //     parseInt(sampleActivity, 10) < 0 || 
  //     parseInt(sampleActivity, 10) > 15 ) {
  //   return false;
  // }
  // const k = 0.693/HALF_LIFE_PERIOD;
  // const result = Math.log(MODERN_ACTIVITY/sampleActivity);
  // const finresult = Math.round(result);  
  // return finresult;
};
