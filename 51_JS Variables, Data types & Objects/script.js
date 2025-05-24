console.log("Let's start the code.")

//VARIABLE

var a = 6; //(var have global scope)
a = a+1; // (var can be updated.)

var b = 10;
var c = "Harry";
// (We can give int or string values in this varibale, it will automatically recognize that.)
var _a = "Roshan";
// var 55a = "Deepika"; (not allowed, because variable name can't start with number) 

{
    let a = 66; //(let have scope only inside this block)
    console.log(a) //(This will be 66)
}

console.log(a) //(this will be 7 i.e 6 + 1, as var have global scope)

console.log(a + b) 
// (console can also do arithmetic opertions)

console.log(typeof a, typeof b, typeof c)
// (This will the data-types of the values stored in a,b and c.)

const a1 = 8;
// a1 = a1 +1; (constant can't be updated) 

// DATA-TYPES 

let x = "Roshan Bro"; //(string)
let y = 22; //(number)
let z = 3.55;//(number)
const p = true;//(boolean)
let q = undefined;//(undefined)
let r = null; //(Data-type of null is Object)

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

//OBJECT

let o = {
    "name" : "Roshan", // (Here name 'key' ; and Roshan is 'value')
   "job code" : "3455",
   "is_handsome" : true ,//(Can also be false, by this we can add boolean values to the Object.)

}

console.log(o)

o.salary ="100 rupees" //(This adds to the given object o)
console.log(o)
o.salary ="100 crores" //(this alters the salary)
console.log(o)