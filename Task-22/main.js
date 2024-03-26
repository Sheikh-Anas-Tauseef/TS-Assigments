// Intentional Error: Array Index Error
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Attempting to access an element beyond the array length to cause an index error
console.log("Attempting to access an element beyond the array length:");
try {
    console.log(numbers[6]); // Accessing the 7th element (index 6)
}
catch (error) {
    console.error("An array index error occurred:", error.message);
}
// Correcting the error
console.log("\nCorrecting the error by accessing a valid element:");
console.log("Third element of the array:", numbers[2]); // Accessing the 3rd element (index 2)
