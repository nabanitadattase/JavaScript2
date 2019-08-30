'use strict';

/*
How would you flatten out all the items of an array with 2 dimensions into a one-dimensional array?
 */

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  // convert in one-dimensional array from 2 dimensional array
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      // arr1.push(arr[i][j]);
      arr1 = arr[i][j];
      console.log(arr1);
    }
  }
}
/*
How would you flatten out all the items of an array with 3 dimensions into a one-dimensional array?
 */
function printArray3d(arr) {
  // convert in one-dimensional array from 3 dimensional array
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[j].length; k++) {
        // arr1.push(arr[i][j][k]);
        arr1 = arr[i][j][k];
        console.log(arr1);
      }
    }
  }
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
