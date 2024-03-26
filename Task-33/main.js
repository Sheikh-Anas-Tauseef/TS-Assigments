// Define an array containing numbers 1 through 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
numbers.forEach(function (number) {
    // Determine the proper ordinal ending based on the number
    var ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with its ordinal ending
    console.log("".concat(number).concat(ordinalEnding));
});
