/**Structure 5 — Ternary Operator (Shortcut)
For simple true/false decisions, there's a one-line shortcut: */

// Normal if/else
let score = 85;
let results;
if (score >= 50) {
    results = "Pass";
} else {
    results = "Fail";
}

// Same thing — ternary operator
let resultss = score >= 50 ? "Pass" : "Fail";
//                      ↑          ↑
//              if true → "Pass"   if false → "Fail"

//Reading it: "Is score >= 50? YES → 'Pass', NO → 'Fail'"

// More automation examples
let isVisible = true;
let status = isVisible ? "Element is visible ✅" : "Element is hidden ❌";
console.log(status);

let itemCount = 0;
let cartMessage = itemCount > 0 ? `${itemCount} items in cart` : "Cart is empty";
console.log(cartMessage);