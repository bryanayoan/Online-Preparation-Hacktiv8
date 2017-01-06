// Challenge
// Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
// Sample Test Cases
// Input:3 & num2 = 122
// Output:"true"

// Input:67 & num2 = 67
// Output:"-1"
// Hint
// This challenge shouldn't require more than a few simple conditionals checking the values of both parameters.

function CheckNums(num1,num2) {
if (num2 > num1) {
    return true;
} else if (num1 == num2) {
    return -1;
} else {
    return false;
}
  // code goes here
  return num1 + num2;

}
console.log(CheckNums(8,8));

// keep this function call here
// CheckNums(readline());
