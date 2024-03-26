// Define the guest list
var guestListu = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var cantAttendu = "Albert Einstein";
console.log(cantAttendu + " " + "Can Not Attend The Dinner");
var newGuestu = "Nikola Tesla";
guestListu[guestListu.indexOf(cantAttendu)] = newGuestu;
console.log("Dear Guests, You Are Invited To The Dinner:");
guestListu.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You Are Invited To The Dinner"));
});
// Informing about a bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
var moreGuestsu = ["Isaac Newton", "Galileo Galilei"];
guestListu.unshift(moreGuestsu[0]); // Adding at the beginning
guestListu.splice(Math.ceil(guestListu.length / 2), 0, moreGuestsu[1]); // Adding in the middle
guestListu.push("Stephen Hawking"); // Adding at the end
// Printing new invitation messages
console.log("\nUpdated Invitation List:");
guestListu.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You Are Invited To The Dinner"));
});
// Printing the total number of guests invited
console.log("Total number of guests invited: ".concat(guestListu.length));
