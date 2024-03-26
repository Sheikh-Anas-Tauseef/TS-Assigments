// Function to order a sandwich
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
    console.log("--------------------");
}

// Calling the function with different number of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Bread");
