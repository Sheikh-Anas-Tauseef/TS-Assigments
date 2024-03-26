// Array containing favorite pizza names
const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Printing the name of each pizza using a for loop
console.log("Printing pizza names:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

// Printing a sentence for each pizza
console.log("\nPrinting sentences about each pizza:");
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} pizza.`);
}

// Additional sentence about liking pizza
console.log("\nI really love pizza!");
