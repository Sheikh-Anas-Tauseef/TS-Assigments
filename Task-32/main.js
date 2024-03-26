// Make a list of current users
var currentUsers = ["john", "mary", "alex", "emma", "chris"];
// Make a list of new users
var newUsers = ["emma", "peter", "chloe", "ALEX", "david"];
// Loop through new users to check for uniqueness
console.log("Checking usernames:");
var _loop_1 = function (newUser) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    var lowerNewUser = newUser.toLowerCase();
    var isUnique = !currentUsers.some(function (user) { return user.toLowerCase() === lowerNewUser; });
    if (isUnique) {
        console.log("Username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
