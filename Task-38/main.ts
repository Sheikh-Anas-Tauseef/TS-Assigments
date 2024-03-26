// Define the function describe_city()
function describe_city(city: string, country: string = "Default Country") {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Sydney"); // Using default country
