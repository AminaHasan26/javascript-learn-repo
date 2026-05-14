/**
 * You've mastered objects — individual data containers. Now we go one level deeper.
What if you need to create 100 user objects, all with the same structure but different data?
 Copy-pasting the same object shape 100 times is a nightmare.
Classes solve this completely — and they are the direct foundation of Page Object Model, the most important pattern in professional automation.
 */

/**
 * A class is a blueprint for creating objects. You define the structure once, 
 * then stamp out as many objects as you need from that blueprint — each with their own data.
 * Real-World Analogy
Think of a house blueprint:
BLUEPRINT (Class)
┌─────────────────────┐
│  Bedrooms: ?        │
│  Bathrooms: ?       │
│  Color: ?           │
│  hasGarage: ?       │
└─────────────────────┘
         ↓ Build from blueprint
         
House 1          House 2          House 3
Bedrooms: 3      Bedrooms: 4      Bedrooms: 2
Bathrooms: 2     Bathrooms: 3     Bathrooms: 1
Color: Blue      Color: White     Color: Red
hasGarage: true  hasGarage: false hasGarage: true

The blueprint never changes. But each house built from it has its own unique details.

//In automation:
LoginPage (Class — blueprint)
    ↓ create instances for different test scenarios

loginPage_AdminTest      loginPage_ViewerTest     loginPage_LockedTest
url: staging/login       url: staging/login        url: staging/login
user: admin@app.com      user: viewer@app.com      user: locked@app.com
password: Admin@123      password: View@123         password: Lock@123
 */

/**
 * class ClassName {
    
    // Constructor — runs when object is created
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    // Methods — things the object can do
    methodName() {
        // code
    }
}

// Create an object FROM the class
let myObject = new ClassName(value1, value2);
 */

//Your First Class

class TestCase {

    constructor(name, priority, status) {
        this.name     = name;
        this.priority = priority;
        this.status   = status;
        this.duration = 0;          // default value
        this.errors   = [];         // starts as empty array
    }

    printDetails() {
        console.log(`Test    : ${this.name}`);
        console.log(`Priority: ${this.priority}`);
        console.log(`Status  : ${this.status}`);
        console.log(`Duration: ${this.duration}ms`);
        console.log("----------------------------");
    }

    pass(duration) {
        this.status   = "pass";
        this.duration = duration;
    }

    fail(duration, errorMessage) {
        this.status   = "fail";
        this.duration = duration;
        this.errors.push(errorMessage);
    }

    isPassed() {
        return this.status === "pass";
    }
}

// Create objects FROM the class using 'new'
let loginTest    = new TestCase("Login Test",    "critical", "pending");
let checkoutTest = new TestCase("Checkout Test", "high",     "pending");
let searchTest   = new TestCase("Search Test",   "medium",   "pending");

// Each object is independent
loginTest.pass(1200);
checkoutTest.fail(3400, "Submit button not found");
searchTest.pass(850);

// Use methods
loginTest.printDetails();
checkoutTest.printDetails();
searchTest.printDetails();

// Check status
console.log(loginTest.isPassed());    // true
console.log(checkoutTest.isPassed()); // false

