// Program for Q#16

// Define the guest list
let guestListe: string[] = ["Nikola Tesla", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];

// Informing about the limited space for dinner
console.log("Bad news! The new dinner table won't arrive in time. We can only invite two people for dinner.");

// Removing guests until only two names remain
while (guestListe.length > 2) {
    let removedGuest = guestListe.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Printing invitation messages for the two remaining guests
console.log("\nInvitation for remaining guests:");
guestListe.forEach(guest => {
    console.log(`Dear ${guest}, You Are Still Invited To The Dinner`);
});

// Removing the last two names from the list to make it empty
guestListe.pop();
guestListe.pop();

// Printing the list to ensure it's empty
console.log("\nFinal Guest List:");
console.log(guestListe);
