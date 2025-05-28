/*
Create a Business Name Generator by combining list of Adjectives, Shop Name and Another word.

Adjectives : Crazy, Amazing and Fire.

Shop Name : Engine, Foods and Garments.

Another word : Bros, Limited and Hub.

Note: Use function and strings (Don't use Arrays).
*/

let rand = Math.random();
let First, Second, Third;

if(rand<0.33){

    First = "Crazy";
}
else if (0.33<rand<0.66){

    First = "Amazing";
}
else{

    First = "Fire";
}

rand = Math.random()

if(rand<0.33){

    Second = "Engine";
}
else if(0.33<rand<0.66){

    Second = "Foods";
}
else{

    Second = "Garments";
}

rand = Math.random()

if(rand<0.33){

    Third = "Bros";
}
else if(0.33<rand<0.66) {

    Third = "Limited";
}
else{

    Third = "Hub";
}


console.log(`${First} ${Second} ${Third}`);