/**
 * Scope (Where Variables Live)
 * Scope means where a variable can be accessed.
 */

let globalVar = "I am global"; // accessible everywhere

function myFunction() {
    let localVar = "I am local"; // only accessible inside this function
    console.log(globalVar); // can access global
    console.log(localVar);  // can access local
}

myFunction();
console.log(globalVar); // works
console.log(localVar);  // ERROR — localVar doesn't exist out here

/**
 * Real-world analogy:
 * Global variable = a notice board in the office — everyone can see it
 * Local variable = a sticky note on your desk — only you can see it, it doesn't exist in other rooms
 * 
 */

// Each function has its own scope
function test1() {
    let status = "passed";
    console.log(status); // passed
}

function test2() {
    let status = "failed"; // completely separate variable
    console.log(status); // failed
}

test1();
test2();
// Both have a variable called "status" but they don't interfere