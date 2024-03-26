// Define a function to store information about a car
function storeCarInfo(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    // Initialize car object with required properties
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional information to the car object
    additionalInfo.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        carInfo[key] = value;
    });
    return carInfo;
}
// Call the function with required information and additional properties
var car_Details = storeCarInfo("Toyota", "Camry");
// Print the object to make sure all information was stored correctly
console.log(car_Details);
