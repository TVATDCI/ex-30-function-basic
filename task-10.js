/** Task 10: Function onlyNumber */

const onlyNumber = function (array) { // Declare a function onlyNumber() that takes an array as an argument.
  const newArray = []; // Declare a new variable newArray and assign an empty array to it.

  for (let i = 0; i < array.length; i++) {
    // Use a for loop to iterate through the array argument.
    if (typeof array[i] === "number") {
      // Use an if statement  with typeof operator to check if the current data type of the array is a number.
      newArray.push(array[i]); // If the current data type of the array is a number, add the number to the newArray variable.
    }
  }

  return newArray; // Return the newArray variable.
};

console.log(onlyNumber([1, "cat", 3, "dog", 5, "pig", 7, "chicken", 9])); // [1, 3, 5]
/** How it works?
 * The function onlyNumber() takes an array as an argument and returns a new array, to the newArray variable.
 * The for loop iterates through the array argument. The if statement (uses typeof operator) checks if the current data type of the array is a === number (typeof array[i] === "number").
 * If the current data type of the array is a number, the number is added (.push()) to the newArray variable (newArray.push(array[i])) and returns the newArray variable (return newArray).
 * If the current data type of the array is not a number? too bad! It will increment the loop and check the next index of the array or stop the loop if there is no more index to check.
 */
