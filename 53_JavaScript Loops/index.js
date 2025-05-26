console.log("I am JavaScript Loops......")

//LOOPS
/*
a) 'for' loop :

for(initialization; condition; increment/decrement){
//code to be executed
}
*/

for (let i = 1; i <= 10; i++) {

    console.log(i); //(prints from i=1 to i=10)
}

/*
b) 'forin' loop :

for(key in object){
//code
}
*/

let obj = {
    name : "Roshan",
    role : "Programmer",
    id : "100",
}

for (const key in obj) {
     
        const element = obj[key];
        console.log(key, ":", element); //Prints each "key : element"
}

/*
c) 'forof' loop :

for(variable in iterator){
//code
}
*/

for(const ch of "Roshan"){
    console.log(ch); //Prints each character of the string
}

/*
d) 'while' loop :

while(condition){
code
increment/decrement
}
*/

let z=1;

while(z<6){
    console.log(z); //Prints z from 1 to 5.
    z++;
}

/*
e) 'dowhile' loop :

do{
Code -> (code gets executed atleast once w/o checking the condition)
increment/decrement
}
while(condition)
*/

let u=0;
do{ 
    console.log(u); //prints u from 0 to 5
    u++;
} while(u<6);