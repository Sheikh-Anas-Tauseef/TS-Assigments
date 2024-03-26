// Define the guest list
var guestLists = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
var CantAttend = "Albert Einstein";
console.log(CantAttend + " " + "Can Not Attend The Dinner");
var newGest = "Nekola Tesla";
guestLists[guestLists.indexOf(CantAttend)] = newGest;
//console.log(guestLists)
guestLists.map(function (items) {
    return console.log("Dear ".concat(items, ", You Are Invited Too The Dinner "));
});
