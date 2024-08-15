/**
 * Task-4 = double function
 */

function double(number) {
    return number * 2;
}

let result = double(2);// argument 2 is assigned to new variable result and return 2 * 2 = 4
// they both work for the same function double(number) but with different way of invoking the function!
console.log(result); 
console.log(double(3)); // argument 3 is assigned to the parameter number(in console.log) and return 3 * 2 = 6