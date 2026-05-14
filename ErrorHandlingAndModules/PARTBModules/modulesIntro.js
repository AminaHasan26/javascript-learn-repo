/**
 * PART B — Modules
 * You've been writing all code in one place. In real frameworks you'll have hundreds of files — page objects, helpers, test data, configs, utilities.
Modules let you split code across files and share it cleanly.
 */

/**
 * Simple Explanation
A module is a separate file that contains related code. 
You export what you want to share and import what you need.

//Real-World Analogy
Think of a toolbox with separate compartments:
toolbox/
├── screwdrivers/    ← only screwdrivers here
├── hammers/         ← only hammers here
├── measuring/       ← only measuring tools here
└── power-tools/     ← only power tools here

When you need a screwdriver — you go to the screwdrivers compartment. 
You don't dump everything in one pile.

automation-framework/
├── pages/           ← page objects only
├── helpers/         ← utility functions only
├── data/            ← test data only
├── config/          ← configuration only
└── tests/           ← test files only
 */

/**
 * Two Module Systems
JavaScript has two module systems. You need to know both:

CommonJSrequire() / module.exportsNode.js, older projects
ES Modulesimport / exportModern JavaScript, Playwright default
 */