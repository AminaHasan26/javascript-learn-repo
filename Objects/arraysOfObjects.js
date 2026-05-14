/**
 *  Arrays of Objects
 * This is the combination you'll use constantly in automation. 
 * An array where each item is an object.
 */


let testSuite = [
    { id: 1, name: "Login Test",    status: "pass", duration: 1200, browser: "Chrome"  },
    { id: 2, name: "Search Test",   status: "fail", duration: 3400, browser: "Firefox" },
    { id: 3, name: "Checkout Test", status: "pass", duration: 980,  browser: "Chrome"  },
    { id: 4, name: "Payment Test",  status: "fail", duration: 5100, browser: "Safari"  },
    { id: 5, name: "Logout Test",   status: "pass", duration: 600,  browser: "Chrome"  }
];

// Access specific item
console.log(testSuite[0].name);    // Login Test
console.log(testSuite[1].status);  // fail
console.log(testSuite[2].duration); // 980

// Loop through array of objects
testSuite.forEach(test => {
    let icon = test.status === "pass" ? "✅" : "❌";
    console.log(`${icon} ${test.name} — ${test.duration}ms — ${test.browser}`);
});

// Filter — get only failed tests
let failed = testSuite.filter(test => test.status === "fail");
console.log(`\nFailed tests: ${failed.length}`);
failed.forEach(test => console.log(`  ❌ ${test.name}`));

// Map — extract just names
let names = testSuite.map(test => test.name);
console.log(`\nAll tests: ${names.join(", ")}`);

// Find — get specific test
let checkoutTest = testSuite.find(test => test.name === "Checkout Test");
console.log(`\nCheckout duration: ${checkoutTest.duration}ms`);

// Reduce — total duration
let totalTime = testSuite.reduce((sum, test) => sum + test.duration, 0);
console.log(`Total duration: ${totalTime}ms`);