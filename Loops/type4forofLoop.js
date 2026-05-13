/**
 * Loop 4 — for...of Loop
The Cleanest Way to Loop Through a List

for (let item of collection) {
    // item = current element in each iteration
}
 */

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

for (let browser of browsers) {
    console.log(`Running tests on ${browser}`);
}

//Compare with regular for loop:

// Regular for — more code, easy to make mistakes
for (let i = 0; i < browsers.length; i++) {
    console.log(`Running tests on ${browsers[i]}`);
}

// for...of — cleaner, easier to read 
for (let browser of browsers) {
    console.log(`Running tests on ${browser}`);
}

//Real Automation Use — for...of

let testUsers = [
    "admin@myapp.com",
    "manager@myapp.com", 
    "viewer@myapp.com",
    "invaliduser",
    ""
];

for (let user of testUsers) {
    if (user === "") {
        console.log("Empty email — validation should trigger");
    } else if (!user.includes("@")) {
        console.log(`"${user}" — Invalid email format`);
    } else {
        console.log(`"${user}" — Valid email format`);
    }
}