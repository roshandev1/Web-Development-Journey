let a = prompt("Enter 1st Number :"); //When we use 'prompt' it takes value input as string.
let b = prompt("Enter 2nd Number :");

if (isNaN(a) || isNaN(b)) {
  //using this so we can get a error if user gives a input which is not a number.
  throw SyntaxError("Sorry, This is not allowed. Give a number."); //example of throwing a custom error.
}

let sum = parseInt(a) + parseInt(b); //if we use "a+b", it will give ans in string form. E.g: 2+3 = 23. Now if user puts input as character, it will give ans as NaN (Not a Number).

// console.log("The sum of numbers is :", sum*x); (now we will get error as 'x' is not defined.)

//try and catch method to handle error:

function main() {

  try {
    console.log("The sum of numbers is :", sum * x);
    return true;

  } catch (err) {

    console.log("Error aagya bhai...");
    //Error Objects:
    console.log(err.message);
    console.log(err.stack);
    console.log(err.name);

    return false;
  }

  finally{
    //this will get executed even if answer is returned in the above code.
    console.log("All files are closing...")
  }
}

console.log(main());