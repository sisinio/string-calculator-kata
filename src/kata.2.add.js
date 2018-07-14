'use strict'

var add = function(numbers) {
  //initialize output
  let sum = 0;
  //check parameter and return zero if empty
  if ( !numbers || numbers == '0')
    return sum;
  //split the parameter to an array	
  let aNumbers = numbers.split(',');
  //loop the array and try to sum the numbers
  for (let n in aNumbers) {
  	sum +=parseInt(aNumbers[n]);
  }
  return sum;
};

module.exports = add;