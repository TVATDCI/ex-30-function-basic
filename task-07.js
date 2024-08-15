/** Task: 07: Function leadsToZero(number) that takes a number as an argument and returns a string that says if the number leads to 0 or not. If the number is less than or equal to 9, add a 0 before the number.
 * Method:
 * 1. Use a ternary operator to check if the number is less than or equal to 9.
 * 2. If the number is less than or equal to 9, return the number with a 0 added before it.
 * 3. If the number is greater than 9, return the number argument with a string that says the number does not lead to 0.
 */

function leadsToZero(number) {
  return number <= 9 ? `0${number} leads to 0` : `${number} does not lead to 0`;
}

console.log(leadsToZero(5)); // 5 leads to 0
console.log(leadsToZero(0)); // 0 leads to 0
console.log(leadsToZero(10)); // 10 does not lead to 0
console.log(leadsToZero(20)); // 20 does not lead to 0
console.log(leadsToZero(30)); // 30 does not lead to 0
console.log(leadsToZero(7)); // 7 leads to 0
