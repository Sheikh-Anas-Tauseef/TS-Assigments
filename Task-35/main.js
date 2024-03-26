// Define the list of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Print out the name of each animal using a for loop
console.log("Names of the animals:");
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Print a statement about each animal
console.log("\nCharacteristics of each animal:");
for (var i = 0; i < animals.length; i++) {
    var statement = void 0;
    switch (animals[i]) {
        case "Dog":
            statement = "A dog would make a great pet.";
            break;
        case "Cat":
            statement = "A cat would make a great companion.";
            break;
        case "Rabbit":
            statement = "A rabbit is an adorable pet choice.";
            break;
        default:
            statement = "This animal would make a great pet.";
    }
    console.log(statement);
}
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
