// Program for Q#15

// Define the guest list
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

let cantAttend: string = "Albert Einstein";
console.log(cantAttend + " " + "Can Not Attend The Dinner");

let newGuest: string = "Nikola Tesla";

guestList[guestList.indexOf(cantAttend)] = newGuest;

console.log("Dear Guests, You Are Invited To The Dinner:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You Are Invited To The Dinner`);
});

// Program for Q#16

// Informing about a bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Adding new guests
let moreGuests: string[] = ["Isaac Newton", "Galileo Galilei"];
guestList.unshift(moreGuests[0]); // Adding at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, moreGuests[1]); // Adding in the middle
guestList.push("Stephen Hawking"); // Adding at the end

// Printing new invitation messages
console.log("\nUpdated Invitation List:");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, You Are Invited To The Dinner`);
});
