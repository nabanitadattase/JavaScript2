'use strict';

/*
You must write a function that takes 4 arguments.
A start value
An end value
A callback to call if the number is divisible by 3
A callback to use if the number is divisible by 5
The function should first generate an array containing values from start value to end value (inclusive).
Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.
The function should call the second callback if the array value is divisible by 5.
Both functions should be called if the array value is divisible by both 3 and 5.
*/
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  // displaying the numbers including startindex and stopindex
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  // Calling the function if the number is divisable by 3
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
    }
    // Calling the function if the number is divisable by 5
    if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    }
  }
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is divisable by 3');
}

function sayFive(number) {
  // Replace this comment and the next line with your code

  console.log(number + ' is divisable by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
