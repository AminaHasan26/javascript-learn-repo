/**
 * The constructor
 */

class User {
    constructor(name, email, role) {
//              ↑ parameters received when 'new' is called

        this.name  = name;
//      ↑ 'this' = the new object being created
//             ↑ property name stored on the object
//                    ↑ value assigned to the property

        this.role  = role;
        this.email = email;
        this.isLoggedIn = false;  // ← default — same for ALL users
        this.loginCount = 0;      // ← default — same for ALL users
    }
}

let admin  = new User("Priya", "priya@app.com", "admin");
let viewer = new User("Rahul", "rahul@app.com", "viewer");

console.log(admin.name);      // Priya
console.log(viewer.name);     // Rahul
console.log(admin.isLoggedIn); // false ← default applied


/**
 * The new Keyword
 */
let adminTest = new User("Priya", "priya@app.com", "admin");
//          ↑
//    1. Creates a brand new empty object
//    2. Runs the constructor with your arguments
//    3. Assigns all 'this.x = y' properties
//    4. Returns the completed object
//    5. Stores it in 'adminTest'