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
    //get separator
    let params = numbers.split(/[\n]/);
    //check if the separator parameter is available
    if (params.length == 2) {
      let separator = params[0];
      //extract separator
      separator = separator.substr(2, separator.length - 2);
      //split the string with the separator
      aNumbers = params[1].split(separator);
    }
  }
  else {
    //split the parameter to an array with regular expression
    aNumbers = numbers.split(defaultRegExp);
  }
  //loop the array and try to sum the numbers
  let negatives = [];
  for (let n in aNumbers) {
    let num = parseInt(aNumbers[n]);
    //check if the number is negative
    if (num < 0) {
      //if negative push the number to an array
      negatives.push(num);
    }
    //sum the numbers only if the negative numbers array is empty
    else if (negatives.length == 0) {
      //ignore the numbers greater than 1000
      if (num < 1000)
        sum += num;
    }
  }
  //throw exception with numbers
  if (negatives.length > 0)
    throw ('negatives not allowed: ' + negatives.join());
  return sum;
};

module.exports = add;