/**
 * A function is a named, reusable block of code. You write it once, give it a name, 
 * and call it whenever you need it — as many times as you want.
 * Part A — Creating and Calling Functions
 * Basic Structure
 * // DEFINING the function — building the machine
function functionName() {
    // code to run when called
}

// CALLING the function — pressing the button
functionName();
 */

// Define once
function printTestHeader() {
    console.log("================================");
    console.log("      AUTOMATION TEST RUN       ");
    console.log("================================");
}

// Call as many times as needed
printTestHeader();
printTestHeader();
printTestHeader();

/**
 * Part B — Parameters (Giving Functions Input)
 * A function that always does the exact same thing has limited use.
Parameters let you pass information IN to a function so it can work with different data.
 */

// functionName(parameter1, parameter2)
function greetUser(userName, role) {
    console.log(`Welcome, ${userName}!`);
    console.log(`You are logged in as: ${role}`);
    console.log("----------------------------");
}

// Call with different data each time
greetUser("Priya", "Admin");
greetUser("Rahul", "Manager");
greetUser("Guest", "Viewer");

/**
 * Parameters vs Arguments
 * Parameter -> In the function definition -> userName, role
 * ArgumentWhen ->calling the function -> "Priya", "Admin"
 * Think of parameters as empty boxes and arguments as the things you put in them.
 */

/**
 * Default Parameters
 * What if someone calls your function without passing a value?
 */

// Without default — undefined appears
function greetUser(userName) {
    console.log(`Welcome, ${userName}`);
}
greetUser(); // Welcome, undefined ← looks broken!

// With default — safe fallback
function greetUser(userName = "Guest") {
    console.log(`Welcome, ${userName}`);
}
greetUser();          // Welcome, Guest 
greetUser("Priya");   // Welcome, Priya 

//Real automation use:

function runTest(testName, browser = "Chrome", retries = 3) {
    console.log(`Running: ${testName}`);
    console.log(`Browser: ${browser}`);
    console.log(`Retries: ${retries}`);
    console.log("---");
}

runTest("Login Test");                        // uses defaults
runTest("Checkout Test", "Firefox");          // overrides browser
runTest("Payment Test", "Safari", 5);         // overrides both