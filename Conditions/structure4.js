/**Structure 4 — Nested if
Conditions inside conditions: */

let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    console.log("User is logged in");

    if (userRole === "admin") {
        console.log("Showing admin dashboard");
    } else if (userRole === "manager") {
        console.log("Showing manager dashboard");
    } else {
        console.log("Showing regular user dashboard");
    }

} else {
    console.log("Please log in first");
}

/**Real-world analogy:
Security checkpoint at an airport:

First check: Do you have a boarding pass? (outer if)
If yes → Second check: Are you flying business class? (inner if)
If yes → Go to priority lane
If no → Go to regular lane */