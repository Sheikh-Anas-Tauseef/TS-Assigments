// Define an array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to show magicians
function showMagician(magicianNames: string[]): void {
    console.log("Magicians:");
    magicianNames.forEach(magician => {
        console.log(magician);
    });
}

// Call the function to display magician names
showMagician(magicians);
