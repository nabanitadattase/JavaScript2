'use strict';

/* 
write a program that doubles the odd numbers in an array and throws away the even numbers.
*/
function doubleOddNumbers(numbers) {
  // console.log(numbers);
  const oddNumbers = numbers.filter(oddNum => oddNum % 2 !== 0).map(oddNum => oddNum * 2);
  return oddNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers
};
