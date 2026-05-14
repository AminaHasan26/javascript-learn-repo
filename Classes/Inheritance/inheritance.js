/**
 *  Inheritance (Extending Classes)
 * This is where classes become extremely powerful.
Inheritance lets one class extend another — getting all its properties and 
methods automatically, then adding its own on top.
    
        *Real-World Analogy
Think of job roles in a company:

Employee (base)
├── name, email, salary
├── clockIn(), clockOut(), getSalary()
│
├── Developer (extends Employee)
│   ├── INHERITS everything from Employee
│   └── ADDS: programmingLanguage, writeCode(), deployApp()
│
└── Tester (extends Employee)
    ├── INHERITS everything from Employee
    └── ADDS: testingTool, runTests(), filesBug()

 */

