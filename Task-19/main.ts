// Define the guest list
let guestListu: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

let cantAttendu: string = "Albert Einstein";
console.log(cantAttendu + " " + "Can Not Attend The Dinner");

let newGuestu: string = "Nikola Tesla";

guestListu[guestListu.indexOf(cantAttendu)] = newGuestu;

console.log("Dear Guests, You Are Invited To The Dinner:");
guestListu.forEach(guest => {
    console.log(`Dear ${guest}, You Are Invited To The Dinner`);
});

// Informing about a bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Adding new guests
let moreGuestsu: string[] = ["Isaac Newton", "Galileo Galilei"];
guestListu.unshift(moreGuestsu[0]); // Adding at the beginning
guestListu.splice(Math.ceil(guestListu.length / 2), 0, moreGuestsu[1]); // Adding in the middle
guestListu.push("Stephen Hawking"); // Adding at the end

// Printing new invitation messages
console.log("\nUpdated Invitation List:");
guestListu.forEach(guest => {
    console.log(`Dear ${guest}, You Are Invited To The Dinner`);
});

// Printing the total number of guests invited
console.log(`Total number of guests invited: ${guestListu.length}`);
