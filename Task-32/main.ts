// Make a list of current users
const currentUsers: string[] = ["john", "mary", "alex", "emma", "chris"];

// Make a list of new users
const newUsers: string[] = ["emma", "peter", "chloe", "ALEX", "david"];

// Loop through new users to check for uniqueness
console.log("Checking usernames:");

for (const newUser of newUsers) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const lowerNewUser = newUser.toLowerCase();
    const isUnique = !currentUsers.some(user => user.toLowerCase() === lowerNewUser);

    if (isUnique) {
        console.log(`Username '${newUser}' is available.`);
    } else {
        console.log(`Username '${newUser}' is already taken. Please enter a new username.`);
    }
}
