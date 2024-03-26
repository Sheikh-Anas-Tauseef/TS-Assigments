// Define the array of magicians
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of magicians) {
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}

// Function to display magicians' names
function showMagician(magicians: string[], title: string) {
    console.log(`\n${title}:`);
    magicians.forEach(magician => console.log(magician));
}

// Creating a copy of the original array and calling makeGreat function
let greatMagicians: string[] = makeGreat([...magicians]);

// Displaying original magicians' names
showMagician(magicians, "Original Magicians");

// Displaying modified magicians' names with "the Great"
showMagician(greatMagicians, "Magicians with 'the Great'");
