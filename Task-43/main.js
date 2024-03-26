var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the array of magicians
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Function to add "the Great" to each magician's name
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push(magician + " the Great");
    }
    return greatMagicians;
}
// Function to display magicians' names
function showMagician(magicians, title) {
    console.log("\n".concat(title, ":"));
    magicians.forEach(function (magician) { return console.log(magician); });
}
// Creating a copy of the original array and calling makeGreat function
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Displaying original magicians' names
showMagician(magicians, "Original Magicians");
// Displaying modified magicians' names with "the Great"
showMagician(greatMagicians, "Magicians with 'the Great'");
