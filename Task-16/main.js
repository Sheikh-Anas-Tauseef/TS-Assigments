// Program for Q#15
// Define the guest list
var guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var cantAttend = "Albert Einstein";
console.log(cantAttend + " " + "Can Not Attend The Dinner");
var newGuest = "Nikola Tesla";
guestList[guestList.indexOf(cantAttend)] = newGuest;
console.log("Dear Guests, You Are Invited To The Dinner:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You Are Invited To The Dinner"));
});
// Program for Q#16
// Informing about a bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
var moreGuests = ["Isaac Newton", "Galileo Galilei"];
guestList.unshift(moreGuests[0]); // Adding at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, moreGuests[1]); // Adding in the middle
guestList.push("Stephen Hawking"); // Adding at the end
// Printing new invitation messages
console.log("\nUpdated Invitation List:");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You Are Invited To The Dinner"));
});
