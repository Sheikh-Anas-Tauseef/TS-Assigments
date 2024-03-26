// Define the Shirt class
class Shirt {
    size: string;
    message: string;

    // Constructor with default values
    constructor(size: string = "large", message: string = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }

    // Method to print shirt details
    printShirt() {
        console.log(`Size: ${this.size}, Message: ${this.message}`);
    }
}

// Create a large shirt with the default message
const largeShirt = new Shirt();
console.log("Large Shirt:");
largeShirt.printShirt();

// Create a medium shirt with the default message
const mediumShirt = new Shirt("medium");
console.log("\nMedium Shirt:");
mediumShirt.printShirt();

// Create a shirt of any size with a different message
const customShirt = new Shirt("small", "I love coding");
console.log("\nCustom Shirt:");
customShirt.printShirt();
