// Define a function to print invitation message
function PrintInvitation(name: string) {
    console.log(`Dear ${name},\nYou are cordially invited to dinner tonight. We would be honored by your presence.\nBest regards,\n[Your Name]`);
}

// Define the guest list
let guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print invitation message to each guest
PrintInvitation(guestList[0]);
PrintInvitation(guestList[1]);
PrintInvitation(guestList[2]);
PrintInvitation(guestList[3]);

