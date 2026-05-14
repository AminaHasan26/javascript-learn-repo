/**
 *  The Most Important Array Methods
 * Think of these as tools that come built into every array.
 */

//Method 1 — .push() Add to End

let testSuite = ["Login Test", "Search Test"];

testSuite.push("Checkout Test");
testSuite.push("Payment Test", "Logout Test"); // add multiple at once

console.log(testSuite);
// ["Login Test", "Search Test", "Checkout Test", "Payment Test", "Logout Test"]
console.log(testSuite.length); // 5

//Method 2 — .pop() Remove From End

let queue = ["Test A", "Test B", "Test C"];

let removed = queue.pop(); // removes AND returns last item
console.log(removed); // Test C
console.log(queue);   // ["Test A", "Test B"]

//Method 3 — .unshift() Add to Beginning

 testSuite = ["Search Test", "Checkout Test"];

testSuite.unshift("Login Test"); // login should always run first!
console.log(testSuite);
// ["Login Test", "Search Test", "Checkout Test"]

//Method 4 — .shift() Remove From Beginning

 queue = ["Test A", "Test B", "Test C"];

let first = queue.shift(); // removes AND returns first item
console.log(first); // Test A
console.log(queue); // ["Test B", "Test C"]

/**
 * Quick Reference — Add / Remove
 *           Add                         REMOVE
Beginning:  .unshift()                  .shift()
End:         .push()                    .pop()
 */

//Method 5 — .indexOf() Find Position

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

console.log(browsers.indexOf("Firefox")); // 1
console.log(browsers.indexOf("Safari"));  // 2
console.log(browsers.indexOf("Opera"));   // -1 ← not found

// Check if item exists
if (browsers.indexOf("Chrome") !== -1) {
    console.log("Chrome is in the list ");
}

//Method 6 — .includes() Check if Exists

browsers = ["Chrome", "Firefox", "Safari", "Edge"];

console.log(browsers.includes("Firefox")); // true
console.log(browsers.includes("Opera"));   // false

// Much cleaner than indexOf for existence checks
if (browsers.includes("Chrome")) {
    console.log("Chrome found ✅");
}

//Method 7 — .splice() Add or Remove Anywhere
/**
 * This is the most powerful — and trickiest — method.
 */

// splice(startIndex, deleteCount, itemsToAdd...)

 testSuite = ["Login", "Search", "Checkout", "Logout"];

// REMOVE 1 item at index 2
testSuite.splice(2, 1);
console.log(testSuite); // ["Login", "Search", "Logout"]

// INSERT without removing — deleteCount = 0
testSuite.splice(2, 0, "Payment", "Checkout");
console.log(testSuite); // ["Login", "Search", "Payment", "Checkout", "Logout"]

// REPLACE — remove 1, insert new
testSuite.splice(1, 1, "Advanced Search");
console.log(testSuite); // ["Login", "Advanced Search", "Payment", "Checkout", "Logout"]

//Method 8 — .slice() Copy a Portion

// slice(startIndex, endIndex) ← endIndex NOT included
let allTests = ["Login", "Search", "Checkout", "Payment", "Logout"];

let firstTwo = allTests.slice(0, 2);
console.log(firstTwo); // ["Login", "Search"]

let lastTwo = allTests.slice(-2);
console.log(lastTwo);  // ["Payment", "Logout"]

let middle = allTests.slice(1, 4);
console.log(middle);   // ["Search", "Checkout", "Payment"]

// slice does NOT change the original
console.log(allTests); // still all 5 items ✅

/**
 * Key difference:

splice — modifies the original array
slice — copies a portion, original untouched


 */

//Method 9 — .join() Convert Array to String

let tags = ["regression", "smoke", "login", "critical"];

let tagString = tags.join(", ");
console.log(tagString); // regression, smoke, login, critical

let withDash = tags.join(" | ");
console.log(withDash);  // regression | smoke | login | critical

// Great for building test labels
 browsers = ["Chrome", "Firefox", "Edge"];
console.log(`Running on: ${browsers.join(" + ")}`);
// Running on: Chrome + Firefox + Edge

//Method 10 — .reverse() Flip the Order

let steps = ["open browser", "go to login", "enter creds", "click submit"];

steps.reverse();
console.log(steps);
// ["click submit", "enter creds", "go to login", "open browser"]

//reverse() modifies the original array

//Method 11 — .sort() Sort the Array

// Sorting strings
lbrowsers = ["Firefox", "Chrome", "Edge", "Safari"];
browsers.sort();
console.log(browsers); // ["Chrome", "Edge", "Firefox", "Safari"] 

// Sorting numbers — default sort is WRONG for numbers!
let numbers = [10, 2, 100, 25, 8];
numbers.sort();
console.log(numbers); // [10, 100, 2, 25, 8]  sorts as text!

// Correct number sort — use a compare function
numbers.sort((a, b) => a - b); // ascending
console.log(numbers); // [2, 8, 10, 25, 100] 

numbers.sort((a, b) => b - a); // descending
console.log(numbers); // [100, 25, 10, 8, 2] 

//Method 12 — .concat() Merge Arrays

let smokeTests = ["Login", "Logout", "Homepage"];
let regressionTests = ["Checkout", "Payment", "Profile"];

let fullSuite = smokeTests.concat(regressionTests);
console.log(fullSuite);
// ["Login", "Logout", "Homepage", "Checkout", "Payment", "Profile"]

// Modern way — spread operator (cleaner)
let fullSuite2 = [...smokeTests, ...regressionTests];
console.log(fullSuite2); // same result ✅