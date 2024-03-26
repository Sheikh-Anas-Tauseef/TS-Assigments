// Program for Q#18

// Define an array of places to visit
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Canada", "Brazil"];

// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show that the original array is still in its original order
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order (restored):");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
