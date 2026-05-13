let num1;
let num2;

function sum(num1, num2){
  let summ = num1+num2;
  return summ;
}

console.log("Sum of two numbers :",sum(4,7));

function multiplication(num1, num2){
  let result = num1*num2;
  return result;
}

console.log("Multiplication of two numbers:",multiplication(4,7));

function divisonr(num1, num2){
  let result = num1%num2;
  return result;
}

console.log("Division of two numbers this % operators returns Reminder:",divisonr(4,7));


function divisonq(num1, num2){
  let result = num1/num2;
  return result;
}

console.log("Division of two numbers this / operators returns Quotient:",divisonq(4,7));

function substraction(num1, num2){
  let result = num1-num2;
  return result;
}

console.log("Substraction:",substraction(4,7));


//String

function concatination(input1,input2){
  let result = input1+input2;
  return result;
}

console.log("Concatination of two strings:",concatination("hello","world"));


function mstring(input1,input2){
  let result = input1*input2;
  return result;
}

console.log("Multiplication operator test on string:",mstring("hello","world")); // it will return NaN not a number

function drstring(input1,input2){
  let result = input1/input2;
  return result;
}

console.log("Division operator test on string:",drstring("hello","world")); // it will return NaN not a number

//One string one Number


function nstring(input1,input2){
  let result = input1+input2;
  return result;
}
console.log("Mixx datatypes:",nstring("hello",4)); 




function nmstring(input1,input2){
  let result = input1*input2;
  return result;
}
console.log("Mixx datatypes:",nmstring("hello",4)); 

//Only "+" addition operator works with string datatypes rest other operators retun NaN







