// Function to order a sandwich
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
    console.log("--------------------");
}
// Calling the function with different number of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Ham", "Cheese");
orderSandwich("Peanut Butter", "Jelly", "Bread");
