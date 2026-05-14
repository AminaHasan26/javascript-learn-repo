//Type 1 — Function Declaration (What we've used so far)

function sayHello() {
    console.log("Hello!");
}
sayHello();

//Special behaviour: Can be called before it's defined in the file.

sayHello(); // works even though function is defined below!

function sayHello() {
    console.log("Hello!");
}

//This is called hoisting — JavaScript moves function declarations to the top automatically.