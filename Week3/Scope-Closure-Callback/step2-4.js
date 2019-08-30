'use strict';

/*
Create a constructor, Dog, with properties name, color, and numLegs 
that are set to a string, a string, and a number, respectively.
 */
function Dog() {
  // Define a Constructor Function
  this.name = 'Munna';
  this.color = 'black';
  this.numLegs = 4;
}
/* 
Use the Dog constructor from the last lesson to 
create a new instance of Dog, assigning it to a variable hound.
*/
// Use Constructor to create objects
const hound = new Dog();
console.log(hound);
// Do not change or remove anything below this line
module.exports = hound;
