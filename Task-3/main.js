// Store a person's name in a variable
var personName = "john doe";
// Print the name in lowercase
console.log("Lowercase: " + personName.toLowerCase());
// Print the name in uppercase
console.log("Uppercase: " + personName.toUpperCase());
// Convert the name to titlecase and print
var titlecaseName = personName
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
    .join(' ');
console.log("Titlecase: " + titlecaseName);
