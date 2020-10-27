const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {  
  let cats = 0;
  if (matrix.length === 0) return cats;  
  for (let i=0; i<matrix.length; i++){
    let icats = matrix[i].filter(x => x === "^^").length 
    cats = cats + icats
  }
  return cats;
};


