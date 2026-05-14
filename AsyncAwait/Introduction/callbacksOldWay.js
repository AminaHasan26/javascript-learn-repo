/**
 * Part A — Callbacks (The Old Way — Just Understand It)
 * Before async/await existed, developers used callbacks — 
 * functions passed as arguments that run when something finishes.
 */

// Simulating a slow operation
function loadPage(url, callback) {
    console.log(`Loading ${url}...`);
    
    setTimeout(() => {
        // setTimeout simulates waiting (like a page loading)
        console.log(`${url} loaded!`);
        callback(); // call the next step when done
    }, 2000); // waits 2 seconds
}

// Callback hell — ugly and hard to read
loadPage("https://myapp.com/login", function() {
    console.log("Filling username...");
    
    setTimeout(() => {
        console.log("Filling password...");
        
        setTimeout(() => {
            console.log("Clicking login...");
            
            setTimeout(() => {
                console.log("Verifying dashboard..."); //  deeply nested!
            }, 1000);
        }, 1000);
    }, 1000);
});

/**
 * This deeply nested mess is called "Callback Hell" — impossible to read and maintain. 
 * This is exactly why Promises and async/await were invented.
 */
