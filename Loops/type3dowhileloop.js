/**
 * Loop 3 — do...while Loop
Runs At Least Once — Then Checks

do {
    // runs FIRST
    // THEN checks condition
} while (condition);


 */

let pageLoaded = false;
let attempts = 0;

do {
    attempts++;
    console.log(`Checking if page is loaded... attempt ${attempts}`);
    
    if (attempts === 3) {
        pageLoaded = true;
    }
    
} while (!pageLoaded && attempts < 5);

console.log(`Page loaded after ${attempts} attempts`);

/**
 * Real-world analogy:

while = Check if restaurant is open BEFORE going
do...while = Go to the restaurant FIRST, then check if it's open
 (always make the trip at least once)
 */