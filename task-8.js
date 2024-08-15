/** Task 08: The function letterReplace() take 3 strings as arguments and returns a new string.
 * which is the first string with all instances of the second string replaced with the third string.
 * Basically, the string is targeted by the second argument(2nd string) and replaced with the third argument(3rd string).
 * Method:
 * 1. Declare a new variable newString and assign an empty string to it.
 * 2. Use a for loop to iterate through the string argument.
 * 3. Use an if statement to check if the current index of the string is equal to the target string.
 * 4. If the current index of the string is equal to the target string, add the replacement string to the newString variable.
 * 5. If the current index of the string is not equal to the target string, add the current index(original) of the string to the newString variable.
 */

function letterReplace(string, target, replacement) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === target) {
      newString += replacement;
    } else {
      newString += string[i];
    }
  }

  return newString;
}

console.log(letterReplace("hello world", "o", "0")); // hell0 w0rld. Target is o, replacement is 0
console.log(letterReplace("legendary", "e", "3")); // l3g3ndary. Target is e, replacement is 3
console.log(letterReplace("javascript", "a", "4")); // j4v4script. Target is a, replacement is 4
console.log(letterReplace("iamlegend", "z", "I")); // I am legend. Target is z, replacement is original (current index)
