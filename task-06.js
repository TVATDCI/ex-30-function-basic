/**
 * Task 06:
 * Build a function that takes a string as an argument and returns the number of characters in that string.
 * Use .length property to count the number of characters in the following string to compare the result with the length of the string. In this task to find if the length is equal to the number of characters in the string? === strict equality operator is used to compare both values and data types (string and number).
 */

function equalLength(string1, string2) {
  return string1.length === string2.length;
}

console.log(equalLength("cat", "dog")); // true
console.log(equalLength("house", "building")); // false
console.log(equalLength("JavaScript", "Python")); // true
console.log(equalLength("hello", "world")); // false
///////////////////////////////////////////////
// The differences between == loose equality operator and === strict equality operator!!!
// The == loose equality operator compares only the values of the variables, not the data types.
// The === strict equality operator compares both the values and the data types of the variables.
// Example:
const x = 5; // number. value = 5
const y = "5"; // string. value = 5
console.log(x == y); // true
console.log(x === y); // false
