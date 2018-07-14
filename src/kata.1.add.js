'use strict'

var add = function(numbers) {
  //check parameter and return zero if empty
  if ( !numbers || numbers == '0')
    return 0;
  //check if number is 2
  if (numbers.indexOf(',') > 0 ) {
    //split the parameter to an array 
    let aNumbers = numbers.split(',');
    //sum the first 2 numbers
    return parseInt(aNumbers[0]) + parseInt(aNumbers[1]);
  }
  return parseInt(numbers);
};

module.exports = add;