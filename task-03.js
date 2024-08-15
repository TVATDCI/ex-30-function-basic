/**
 * Task 03:
 * getNumberUntill with for loop!
 */

function getNumberUntil(number) {
    const numbers = []; // create an empty array to store the numbers

    for (let i = 0; i < number; i++) { // for loop to iterate through the numbers from 0 to the number argument...
        numbers.push(i); // (i) is the number that is being iterated and stored(return) in the numbers array with .push() method. It means add the value of (i) to the end of the array.
    }

    return numbers; // return the numbers array
}
const list1 = getNumberUntil(5);
const list2 = getNumberUntil(10);
const list3 = getNumberUntil(15);
// you can add whatever variable you want to store the result of the function getNumberUntil. The function will return the numbers from 0 to the number argument and store in the variable.
console.log(list1); // [0, 1, 2, 3, 4]
console.log(list2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(list3); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] but until only 14 (i < number)

///////////////////////////////////////////////////////////////////////////////////////////
// let's try it with another example with different variable names but still uses the same function getNumberUntil with for loop!
const numberX = 5;
const numberY = 10;
const numberZ = 15;
const listX = getNumberUntil(numberX);
const listY = getNumberUntil(numberY);
const listZ = getNumberUntil(numberZ);
console.log(listX); // [0, 1, 2, 3, 4]
console.log(listY); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(listZ); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] 
