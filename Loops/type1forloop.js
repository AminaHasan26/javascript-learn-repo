/**Loop 1 — for Loop
The Most Common Loop
Use when you know exactly how many times you want to repeat. 

*for (start; condition; step) {
    // code to repeat
}

*/

for (let i = 0; i < 5; i++) {
    console.log(`Running test number ${i + 1}`);
}

//Real Automation Use — for Loop

// Simulating running the same test with different data
let testPasswords = ["abc", "12345", "password", "Test@1234", "x"];

for (let i = 0; i < testPasswords.length; i++) {
    let password = testPasswords[i];
    
    if (password.length < 8) {
        console.log(` "${password}" — Too short (${password.length} chars)`);
    } else {
        console.log(`"${password}" — Valid length`);
    }
}
