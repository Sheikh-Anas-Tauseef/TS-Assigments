// Define a function to store information about a car
function storeCarInfo(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]): object {
    // Initialize car object with required properties
    let carInfo: any = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional information to the car object
    additionalInfo.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required information and additional properties
const car_Details = storeCarInfo("Toyota", "Camry" );

// Print the object to make sure all information was stored correctly
console.log(car_Details);
