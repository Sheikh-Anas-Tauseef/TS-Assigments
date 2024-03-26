// Define the Shirt class
var Shirt = /** @class */ (function () {
    // Constructor with default values
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    // Method to print shirt details
    Shirt.prototype.printShirt = function () {
        console.log("Size: ".concat(this.size, ", Message: ").concat(this.message));
    };
    return Shirt;
}());
// Create a large shirt with the default message
var largeShirt = new Shirt();
console.log("Large Shirt:");
largeShirt.printShirt();
// Create a medium shirt with the default message
var mediumShirt = new Shirt("medium");
console.log("\nMedium Shirt:");
mediumShirt.printShirt();
// Create a shirt of any size with a different message
var customShirt = new Shirt("small", "I love coding");
console.log("\nCustom Shirt:");
customShirt.printShirt();
