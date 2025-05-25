console.log("Hello, I am a Conditional....")

let age = 4;
let grace = 2;

// if-else conditional

if (age + grace > 18) { //if condition block
    console.log("You can drive.");
}

else{ //else condition block
    console.log("You cannot drive.");
}

//Arithmetic OPERATORS

console.log(age + grace); //Addition
console.log(age - grace); //Subtraction
console.log(age * grace); //Multiplication
console.log(age ** grace); //Power
console.log(age / grace); //Division (gives quotient)
console.log(age % grace); //Modulus (gives remainder)

//ASSIGNMENT OPERATORS
/*
 console.log(age += grace); -> age = age + grace
 console.log(age -= grace);
 console.log(age *= grace);
 console.log(age **= grace);
 console.log(age /= grace);
 console.log(age %= grace);
*/

//COMPARISON OPERATORS (used in conditionals)
/*
if (age == 18) -> equal to
if (age != 18) -> not equal to
if (age === 18) -> equal value and type
if (age !== 18) -> not equal value or not equal type
if (age > 18) -> greater than
if (age < 18) -> less than
if (age >= 18) -> greater than or equal to
if (age <= 18) -> less than or equal to
*/

//LOGICAL OPERATORS (returns true or false)

let a =3;
let b = 4;

console.log(a!=b) //Gives true, as a is not equal to b. (! logical not)
console.log(a!=b && b!=a) //gives true, as both conditions are true (&& Logical and)
console.log(a!=b || b==a) //gives true, as atleast one condition is true (|| Logical or)

//if-else conditionals

let marks = 20;

(marks < 10)? marks+=10 : marks-=10
/*  
if condition done using '?' (Ternary opertor, which is part of comparison operator).
Here if marks<10 is true, then marks+=10 will be executed. Otherwise marks-=10 will be executed.
*/

console.log(marks); //New value of marks is printed.

