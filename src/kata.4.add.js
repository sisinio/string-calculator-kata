'use strict'

const defaultRegExp = /[,|\n]/;

var add = function(numbers) {
  //initialize output
  let sum = 0;
  //check parameter and return zero if empty
  if ( !numbers || numbers == '0')
    return sum;
  //initialize the array of numbers
  let aNumbers = [];
  //check if the string starts with 2 slash characters
  if (numbers.startsWith('//')) {
    //split parameter
    let params = numbers.split(/[\n]/);
    //check if the user send me an custom separator
    if (params.length == 2) {
      let separator = params[0];
      //extract separator
      separator = separator.substr(2, separator.length - 2);
      if ( params[1] ) {
        //split the string with the separator
        aNumbers = params[1].split(separator);
      }
    }
  }
  else {
    //split the parameter to an array with regular expression
    aNumbers = numbers.split(defaultRegExp);
  }
  /* the user don't send numbers*/
  if (aNumbers.length == 0) 
    return sum;
  //loop the array and try to sum the numbers
  for (let n in aNumbers) {
  	sum +=parseInt(aNumbers[n]);
  }
  return sum;
};

module.exports = add;