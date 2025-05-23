alert("Hello Roshan"); 
// (This alert will not be shown in webpage till we link this .js file with .html file.) 

console.log("Code is running good")
// (Consoles serves as primary tool for debugging and interacting with a webpage's environment)
console.log("Code is like a wow")

var a = prompt("Enter number :")

var isTrue = prompt("Are you sure you want to leave this page and blast the computer")

if(isTrue){
    console.log("computer is blasting")
}

else{
    console.log("Computer is not blasting")
}

console.log(" Your number is " + a)

document.title = "Introducing you to JS"
// (edits the title of document)

document.body.style.backgroundColor = "red"
// (Gives BG VideoColorSpace, this code adds inline css)