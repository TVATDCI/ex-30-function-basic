/**
 * Tas 5: function capitalizeString
 */

function capitalizeString(string) {
// return string with first letter capitalized + .slice(1) the rest from index 1 to the end of the string
    return string[0].toUpperCase() + string.slice(1);
}

const string1 = 'hello';
const string2 = 'world';
const string3 = 'of';
const string4 = 'javascript';

console.log(capitalizeString(string1)); // Hello
console.log(capitalizeString(string2)); // World
console.log(capitalizeString(string3)); // Of
console.log(capitalizeString(string4)); // Javascript
// Same same but different! Like task-03.js.
// Or alternatively, you can add arguments directly to the function capitalizeString inside the console.log
console.log(capitalizeString('hello')); // Hello
console.log(capitalizeString('world')); // World
console.log(capitalizeString('of')); // Of
console.log(capitalizeString('javascript')); // Javascript