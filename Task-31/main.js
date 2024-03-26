// Exercise 28
// Define the list of users
var users = ["John", "Alice", "Bob", "Emma"];
// Check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Print the list of users
    console.log("List of users:");
    users.forEach(function (user) {
        console.log(user);
    });
    // Remove all usernames from the array
    users = [];
    console.log("All usernames have been removed. The list is now empty.");
}
// Checking if the list is empty again and printing appropriate message
if (users.length === 0) {
    console.log("We need to find some users!");
}
