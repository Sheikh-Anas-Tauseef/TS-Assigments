// Define the array of magicians
let magician: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to modify the array of magicians
function makeGreate(magician: string[]): void {
    for (let i = 0; i < magician.length; i++) {
        magician[i] = "the Great " + magician[i];
    }
}

// Function to display the list of magicians
function showMagicians(magician: string[]): void {
    console.log("List of Magicians:");
    magician.forEach(magician => {
        console.log(magician);
    });
}

// Call makeGreat function to modify the array of magicians
makeGreate(magician);

// Call showMagicians function to display the modified list of magicians
showMagicians(magician);
