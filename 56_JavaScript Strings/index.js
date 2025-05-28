console.log("This is about JavaScript Strings");

//STRINGS:
let a = "Roshan"; //declaring a string a.

//Accessing the characters of the string.
console.log(a[0]); //Index of array or strings starts with 0.Therefore a[0]="R". 
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log("The length of the given string a is : " + a.length);
 //here in between we can use plus sign (+) or comma (,).

//TEMPLATE LITERALS:

let any_name = "Vision";
let friend = "Ambition";

console.log("His name is " + any_name + " and his friend's name is " + friend + ".");
//Normal way of printing anything.

console.log(`His name is ${any_name} and his friend's name is ${friend}.`);
//This is called "Template literal", where we use backtic (``) instead of double or single quote.
// We can also insert a variable in the string using ${}, this is called "String Interpolation".

//ESCAPE SEQUENCE CHARACTERS:

// let name = 'Adam D' Angelo' (Show error)

let first_name = 'Adam D\' Angelo'; 
//Here the escape character \ is used. There no error.
console.log(first_name);

/*
\n = new line
\t = tab
\r = Carriage Return
*/

//COMMON PROPERTIES USED IN STRING (there are many more):

let b = "Shivamsh";

console.log(b.toLowerCase()); //all lowercase letters
console.log(b.toUpperCase()); //all uppercase letters
console.log(b.slice(2,4)); // gives letters from index 2 to 4, excluding 4.
console.log(b.slice(2)); // gives letters from index 2 to end.
console.log(b.replace("Sh", "88")); //Here "sh" and "Sh" are different i.e case-sensitive.

let c= "Harry";
console.log(b.concat(c, "Deepika", "Roshan")); //adds string together.

