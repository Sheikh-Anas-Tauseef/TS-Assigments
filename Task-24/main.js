// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Equality test with strings:");
console.log(string1 === string2); // False
console.log("Inequality test with strings:");
console.log(string1 !== string2); // True
// Tests using the lower case function
var string3 = "HELLO";
var string4 = "hello";
console.log("\nLower case comparison:");
console.log(string3.toLowerCase() === string4.toLowerCase()); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("\nNumerical tests:");
console.log("Equality test:");
console.log(num1 === num2); // False
console.log("Inequality test:");
console.log(num1 !== num2); // True
console.log("Greater than test:");
console.log(num1 > num2); // True
console.log("Less than test:");
console.log(num1 < num2); // False
console.log("Greater than or equal to test:");
console.log(num1 >= num2); // True
console.log("Less than or equal to test:");
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
var value1 = true;
var value2 = false;
console.log("\nLogical AND and OR tests:");
console.log("AND test:");
console.log(value1 && value2); // False
console.log("OR test:");
console.log(value1 || value2); // True
// Test whether an item is in an array
var array = [1, 2, 3, 4, 5];
var itemToFind = 3;
console.log("\nArray inclusion test:");
//console.log(array.includes(itemToFind)); // True
// Test whether an item is not in an array
var itemNotInArray = 6;
console.log("\nArray exclusion test:");
//console.log(!array.includes(itemNotInArray)); // True
