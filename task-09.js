/** Task 09: Function isDividedBy
 * The function isDividedBy() takes two numbers as arguments, which are the number % divisor and uses strict equality operator to compare the remainder of the number divided by the divisor and returns a boolean value.
 * But both number input are called in the console.log() ...
*/

function isDividedBy(number, divisor) {
  return number % divisor === 0;
}

console.log(isDividedBy(10, 2)); // true
// The console.log is calling the function isDividedBy parameter 10(number) and 2(divisor). The function isDividedBy takes two arguments, number and divisor. The function returns the remainder of the number divided by the divisor. If the remainder is 0, the function returns true. If the remainder is not 0, the function returns false.
console.log(isDividedBy(10, 3)); // false
