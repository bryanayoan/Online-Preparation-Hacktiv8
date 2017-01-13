/*
Challenge
Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
Sample Test Cases
Input:5,5,2,2,1
Output:5

Input:3,4,1,6,10
Output:-1
*/

function SimpleMode(arr) {

  // code goes here
  let store = {};
  let longestRun = 1;
  let mode = -1;
  arr.forEach(item => store['x' + item] = store['x' + item] + 1 || 1);
  const keys = Object.keys(store);
  keys.forEach(key => {
    if (store[key] > longestRun) {
      longestRun = store[key];
      mode = key.slice(1);
    }
  })
  return mode;

}

console.log(SimpleMode([5,5,2,2,1]));

// keep this function call here
// SimpleMode(readline());
