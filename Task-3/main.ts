// Store a person's name in a variable
let personName: string = "john doe";

// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());

// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());

// Convert the name to titlecase and print
let titlecaseName = personName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

console.log("Titlecase: " + titlecaseName);
