
//while loop: it checks condition and until condition is tru it will excute the code inside the loop.
console.log("While loop Code Execution")

let n = 0;
while(n<10){
    console.log(n);
    n++
}
console.log("We are out of the loop with current value of i :", +n);

// Do While : This also works the same the only difference is it will excute once even if the condition in 
//the while block of code is false , we use it where we want that at least once the code executes.

console.log("Do While Loop");
let m = 0

do {
    m++
    console.log(m)
} while(m<10);
console.log("We are out of the loop with value oj m: " , +m);


// For Loop: It is Used when we know how many time the condition needs to be run , while loop evaluates any expression not just n of time.
console.log("For Loop");
for(let k =0 ; k<10; k++){
    console.log("Value of K inside for loop :" +k);
}

// Use of Logical Operator : &&(AND) and || (OR) 
/* When we need to check both condition are true then use && operator
when we need to check any of the two condition is true the we use || operator
*/

console.log("*********************Use of Operators***************************");
console.log("_______________Multiple of both 2 and 5 from number 1 to 10_______________");
for(let m = 1 ; m<=10; m++){
    if(m%2== 0 && m%5==0){
        console.log("Multiples of 2 and 5 between number 1 to 10 is: ", +m);
    }
}

console.log("_______________Multiple of any 2 and 5 from number 1 to 10_______________");
for(let m = 1 ; m<=10; m++){
    if(m%2== 0 || m%5==0){
        console.log("Multiples of 2 and 5 between number 1 to 10 is: ", +m);
    }
}

console.log("_______________Top 3 Multiple of any 2 and 5 from number 1 to 100 _______________");

let countn = 0;
for (let m = 1 ; m <= 100;m++){
    if(m%2== 0 && m%5==0){
       countn++;
       console.log("Top 3 multiples of 2 & 5 between numberes 1 to 100 is" , +m);
       if(countn == 3)
        break;
       
    }
}


//while loop: it checks condition and until condition is tru it will excute the code inside the loop.
console.log("While loop Code Execution")

let i = 0;
while(i<10){
    console.log(i);
    i++
}
console.log("We are out of the loop with current value of i :", +i);

// Do While : This also works the same the only difference is it will excute once even if the condition in 
//the while block of code is false , we use it where we want that at least once the code executes.

console.log("Do While Loop");
let j = 0

do {
    j++
    console.log(j)
} while(j<10);
console.log("We are out of the loop with value oj j: " , +j);


// For Loop: It is Used when we know how many time the condition needs to be run , while loop evaluates any expression not just n of time.
console.log("For Loop");
for(let k =0 ; k<10; k++){
    console.log("Value of K inside for loop :" +k);
}

// Use of Logical Operator : &&(AND) and || (OR) 
/* When we need to check both condition are true then use && operator
when we need to check any of the two condition is true the we use || operator
*/

console.log("*********************Use of Operators***************************");
console.log("_______________Multiple of both 2 and 5 from number 1 to 10_______________");
for(let m = 1 ; m<=10; m++){
    if(m%2== 0 && m%5==0){
        console.log("Multiples of 2 and 5 between number 1 to 10 is: ", +m);
    }
}

console.log("_______________Multiple of any 2 and 5 from number 1 to 10_______________");
for(let m = 1 ; m<=10; m++){
    if(m%2== 0 || m%5==0){
        console.log("Multiples of 2 and 5 between number 1 to 10 is: ", +m);
    }
}

console.log("_______________Top 3 Multiple of any 2 and 5 from number 1 to 100 _______________");

let count = 0;
for (let m = 1 ; m <= 100;m++){
    if(m%2== 0 && m%5==0){
       count++;
       console.log("Top 3 multiples of 2 & 5 between numberes 1 to 100 is" , +m);
       if(count == 3)
        break;
       
    }
}


