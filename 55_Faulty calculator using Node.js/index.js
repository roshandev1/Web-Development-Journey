/*
Create a Faulty Calculator:

This Faulty calc does the following :
1. It takes 2 numbers as input.
2. It performs wrong operation as follows;
    
   + as -
   * as +
   - as /
   / as **

   It performs wrong operation 10% of the times.
*/

let random = Math.random(); //gives random number from 0 to 1.
console.log(random);

let a = prompt("Enter first number : "); //prompt takes input in browser only
let b = prompt("Enter Operation to perform : ");
let c = prompt("Enter second number : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(random>0.1){
    //perform correct calculation (this is 90% of the times)

    console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);
    //eval() -> evaluates a string of code in JavaScript. If it is expression, it returns the value of the expression.
    //eval() is not recommeded to use more in products.
    //This is a easier method to solve problems.

}

else
    //Perform incorrect calculation (this is 10% of the times) 
    
   c = obj(c); //c becomes equal to incorrect operations given in obj.

   console.log(`The result is ${eval(`${a} ${b} ${c}`)}`);

}