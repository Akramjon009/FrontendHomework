// param number1: {Number}
// param nunber2: {Number}
// returns {Number}

module.exports.getSum = function getSum(number1, number2) {
  return number1.value + number2.value;
};

/*
 @param name: {String}
 @param surname: {String}
 @param age: {Number}
 @returns {String}
*/
module.exports.greeting = function greeting (name, surname, age)  {
    return `Hellow ${name} ${surname}! You're ${year}`;
};

/*
  @param x: {Number}
  @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
  if (x < 0) {
    return false;
  }

const sqrt = Math.sqrt(x);
return Math.floor(sqrt) === sqrt;
};