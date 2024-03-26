// Define the array of magicians
var magician = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to modify the array of magicians
function makeGreate(magician) {
    for (var i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
}
// Function to display the list of magicians
function showMagicians(magician) {
    console.log("List of Magicians:");
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
// Call makeGreat function to modify the array of magicians
makeGreate(magician);
// Call showMagicians function to display the modified list of magicians
showMagicians(magician);
