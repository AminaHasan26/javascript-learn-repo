/**
 * Async / Await
 */

/**
 * This is the most important concept before we enter Playwright.
Every single Playwright command — clicking a button, filling a form, reading text, taking a screenshot — is asynchronous. If you don't understand async/await, your tests will break in confusing ways that are very hard to debug.
Take your time with this one. Read slowly. Try every example.

*The Problem — Why Does Async Exist?
Real-World Analogy — The Restaurant
Imagine you're at a restaurant. You order food. Now two scenarios:

Scenario A — Synchronous (blocking):
You order food
Waiter goes to kitchen
Waiter STANDS there waiting for food
Nobody else gets served
20 minutes later — food arrives
Waiter brings it to you
NOW the next customer gets served

Scenario B — Asynchronous (non-blocking):

You order food
Waiter goes to kitchen, places order
Waiter comes back and serves other customers
20 minutes later — kitchen rings bell
Waiter picks up YOUR food and brings it
Everyone gets served efficiently

JavaScript works like Scenario B.
When your code asks for something that takes time — loading a page, clicking a button, waiting for an element — 
JavaScript doesn't freeze and wait. It moves on and comes back when the result is ready.
 */

//Understanding the Timeline
/**
 * // What you THINK happens (synchronous thinking)
goToLoginPage();     // Step 1 — done
fillUsername();      // Step 2 — done
fillPassword();      // Step 3 — done
clickLogin();        // Step 4 — done
verifyDashboard();   // Step 5 — done

// What ACTUALLY happens without async/await
goToLoginPage();     // Started — but page not loaded yet!
fillUsername();      // RUNS IMMEDIATELY — field doesn't exist yet! ❌
fillPassword();      // RUNS IMMEDIATELY — field doesn't exist yet! ❌
clickLogin();        // RUNS IMMEDIATELY — button doesn't exist yet! ❌
verifyDashboard();   // RUNS IMMEDIATELY — page not loaded yet! ❌
 */

//This is why every Playwright command needs await — 
// to say "wait for this to finish before moving to the next line."
