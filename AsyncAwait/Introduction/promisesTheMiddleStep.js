/**
 * Part B — Promises (The Middle Step)
 * A Promise is an object that represents a value that will be available in the future.
Think of it like an online food order receipt:

You place the order → you get a receipt (Promise)
The receipt isn't food — it's a promise that food is coming
Later, either:

Food arrives ✅ → Promise resolved
Restaurant calls — item unavailable ❌ → Promise rejected
 */


// Creating a Promise
let pageLoadPromise = new Promise((resolve, reject) => {
    
    // Simulate page loading (2 seconds)
    setTimeout(() => {
        let pageLoaded = true; // change to false to simulate error
        
        if (pageLoaded) {
            resolve("Page loaded successfully"); // ✅ success
        } else {
            reject("Page failed to load");       // ❌ failure
        }
    }, 2000);
});

// Using a Promise — .then() for success, .catch() for failure
pageLoadPromise
    .then(result => {
        console.log(`✅ ${result}`);
    })
    .catch(error => {
        console.log(`❌ ${error}`);
    });

console.log("This runs IMMEDIATELY — promise hasn't resolved yet");


//Promise Chaining — Better but Still Complex

function goToPage(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`📄 Navigated to ${url}`);
            resolve();
        }, 1000);
    });
}

function fillField(fieldName, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`⌨️  Filled ${fieldName}: ${value}`);
            resolve();
        }, 500);
    });
}

function clickButton(buttonName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`🖱️  Clicked: ${buttonName}`);
            resolve();
        }, 500);
    });
}

// Promise chaining — better than callbacks but still awkward
goToPage("https://myapp.com/login")
    .then(() => fillField("username", "priya@app.com"))
    .then(() => fillField("password", "Test@1234"))
    .then(() => clickButton("Login"))
    .then(() => console.log("✅ Login complete"))
    .catch(error => console.log(`❌ Error: ${error}`));


//This works — but async/await makes it dramatically cleaner.