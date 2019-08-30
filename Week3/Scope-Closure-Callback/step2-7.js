'use strict';

/* 
Here are two functions that look like they do the something similar but they print different results.
Please explain what's going on here.
*/
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// In first case it will print 9 because value of x is globally declared as 9. So it will not take inner calculated value i.e.local scope.
// In second case y is an object. In JS objects are pass by reference. In the function we are not only modifying the object value but also modifying the address of the object. Thats why it is displaying updated object with its values.
