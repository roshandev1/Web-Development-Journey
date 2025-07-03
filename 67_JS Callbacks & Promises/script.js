//Asynchronous Nature of JavaScript

console.log("Roshan is a coder.");

setTimeout(()=>{
    console.log("This is inside timeout.");
})

console.log("The end.")

//The part inside timeout implements after 2 seconds, i.e after "The end". Asynchronous actions are the actions that initiate now and finish later.

//CALLBACK FUNCTION:

const callback = (arg) => {
    console.log(arg);
 }

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload= ()=> callback("Roshan");
    document.head.append(sc);
 }

 //Think if we give callback and again inside it another callback function and so on....This will become a nest and look complicated (This is called "Pyramid of Doom"). To solve this problem, we use "promises".

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js",callback )