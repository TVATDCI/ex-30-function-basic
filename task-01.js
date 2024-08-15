function add(a, b) {
  return a + b;
}

let result = add(1, 2);

console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////
// Self-study: invoking function
// addX is a function that takes a single argument and returns a new function.
// The function (y) that is returned also takes a single argument and returns the sum of x + y.
function addX(x) {
  return function (y) {
    return x + y;
  };
}

let addOne = addX(1); // let assign addOne to the function (addX) with the argument of 1(1 is assigned to x)
result = addOne(2); // result is assigned to addOne with the argument of 2 (2 is assigned to y) and store the result of x + y
// console.log(result);
console.log(result);