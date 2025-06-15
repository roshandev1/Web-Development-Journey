let a = prompt("Enter a Number: "); //take input of number

let arr=[]; //declaring an array
for (let i = a, j=0; i > 1; i--,j++) {

    arr[j]=i; //filling the array in descending from input number to 1

    
}

console.log(arr); 

//Function 'mult' to calculate multiplication of all elements.
const mult = (a,b)=>{
    return a*b;
}

let fac = arr.reduce(mult); //using reduce method to calculate multiplication of all elements.

console.log(fac); //Prints the Factorial of input number