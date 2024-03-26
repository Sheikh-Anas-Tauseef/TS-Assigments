// Define an array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to show magicians
function showMagician(magicianNames) {
    console.log("Magicians:");
    magicianNames.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function to display magician names
showMagician(magicians);
