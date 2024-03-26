// Define the guest list
let guestLists: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

let  CantAttend: string = "Albert Einstein" ;
console.log(CantAttend + " " + "Can Not Attend The Dinner");

let newGest: string = "Nekola Tesla";

guestLists [guestLists.indexOf(CantAttend)] = newGest ;

//console.log(guestLists)

guestLists.map((items) =>
console.log(`Dear ${items}, You Are Invited Too The Dinner `)
)