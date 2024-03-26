// Define an array of usernames
let usernames: string[] = ["admin", "Eric", "Alice", "John", "Sarah"];

// Loop through the array and print greetings
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
