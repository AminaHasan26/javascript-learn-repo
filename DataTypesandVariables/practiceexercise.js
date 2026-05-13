//Challenge 1 — String Methods:
//Using string methods:

let pageText = "   Welcome to MyApp Dashboard!   ";

console.log("*******************Challenge 1 — String Methods:******************");
console.log("Remove the extra spaces");
console.log(pageText.trim());
console.log("Convert to uppercase");
console.log(pageText.toUpperCase());
console.log("Check if it includes the word 'Dashboard'");
console.log(pageText.includes("Dashboard"));
console.log("Replace'MyApp' with 'BankApp'");
console.log(pageText.replace("MyApp","BankApp"));
console.log("Find the length of the trimmed version");
console.log(pageText.trim().length);
console.log("*******************End******************");

//Challenge 2 — URL Inspector:
console.log("******************Challenge 2 — URL Inspector:******************");
let testUrl = "https://myapp.com/users/profile/456";
console.log("Verify the URL starts with 'https'");
let urlstarts = testUrl.startsWith("https");
console.log("Extract the user ID (456) from the end");
// 2. Extract user ID — most reliable way
let userId = testUrl.split("/").pop();
console.log(`User ID: ${userId}`);
// Check if URL includes "profile"
console.log("Check if the URL includes 'profile'");
let profilecheck = pageText.includes("Profile");
console.log("Print all findings using template literals");
console.log(`Test Url Contains : ${urlstarts} \n Profile check : ${profilecheck}`);


console.log("****************************Challenge 3 — Test Report Generator:*******************");
let totalTests = 120;
let passedTests = 108;
let failedTests = totalTests - passedTests;
let passRate = (passedTests / totalTests) * 100;

/**
Using toFixed() and template literals, print:
Test Summary
Total  : 120
Passed : 108
Failed : 12
Rate   : 90.00% */

console.log(`Test Summary \n Total: ${totalTests} \n Passed: ${passedTests} \n Failed : ${failedTests} \n Rate : ${passRate.toFixed(2)} %`);

console.log("****************************Challenge 4 — Random Test User:*******************");
let randomNum = Math.floor(Math.random()*10000); 
//console.log(`testuser${Math.floor(Math.random())}@qatest.com`);
console.log(`testuser${randomNum}@qatest.com`);






