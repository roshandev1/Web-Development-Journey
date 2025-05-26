function nice(name) {
    
    console.log("Hey" +  name + "you look Beautiful");
    console.log("Hey" + name + "you have lovely hairs");
    console.log("Hey" + name + "your eyes make me for fall for you");
    console.log("Hey" + name + "please allow me to hide in your heart, as I am playing Hide-n-seek.... ");
}

nice(" Roshani ") //Always it's preferred to use double quote declaration for strings.
nice(" Roshan ") //Calling the function using different name.


function sum(a,b){
    console.log(a+b); //just prints a+b
    return a+b; //returns a+b to sum function
}

result = sum(5,6); //without writing return in function, we cannot store the sum in any other variable.

console.log("The sum of two numbers is : ", result )

//ARROW FUNCTION:

const func1 = (x) => {
    console.log("I am an arrow function ", x);
}
//
func1(56);
