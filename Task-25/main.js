// Alien Colors #1
// Alien color variable
var alienColor = 'green';
// Version passing the if test
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
// Version failing the if test
alienColor = 'red'; // Change alien's color to red
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
