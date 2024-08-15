function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(2)); // 2 is the argument of the function isEven. Which store in (number) parameter. The function will return true because 2 % 2 === 0
console.log(isEven(3)); // 3 is the argument of the function isEven. Which store in (number) parameter. The function will return false because 3 % 2 !== 0
// you can add whatever (number) you want as an argument to the function isEven. The number will then be stored in the (number) parameter and divided by 2(return number % 2 === 0) and return true if the number is even and false if the number is odd.

///////////////////////////////////////////////////////////////////////////////////////////
// let's create a function that takes a number as an argument and returns a string that says whether the number is even or odd.
function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

console.log(isEvenOrOdd(7)); // 2 is the argument of the function isEvenOrOdd. Which store in (number) parameter. With if else statement, the function will return as string 'even' or 'odd' based on the number argument. The idea is to check if the number is even or odd. And most important is to return as 'string' not as a boolean like the above function.