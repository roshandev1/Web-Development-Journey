console.log("JavaScript is Playing...");

console.log(document.querySelector(".box")); 

console.dir(document.querySelector(".container")); //shows the element as an object with its properties.

console.log(document.querySelector(".box").innerHTML) //innerHTML shows the 1st HTML element inside a given selector.

console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".container").innerText) //innerText gives the text inside given selector

console.log(document.querySelector(".container").outerHTML); //gives all the elements inside and including itself.

console.log(document.querySelector(".container").tagName); //Gives DIV, gives only element nodes.
console.log(document.querySelector(".container").nodeName); //nodeName gives for any type pf node like text, comment,etc

//ATTRIBUTE METHODS:

console.log(document.querySelector(".box").hasAttribute("style")); //returns true as style attribute is present.

console.log(document.querySelector(".box").getAttribute("style")); //get what is inside style attribute.

console.log(document.querySelector(".box").dataset); //custom attribute starting "data-" 

//className and classList :

console.log(document.querySelector(".container").classList); //gives the class list of class "container"
console.log(document.querySelector(".container").className);

document.querySelector(".container").classList.add("Roshan"); //adds class "Roshan"
console.log(document.querySelector(".container").className);
document.querySelector(".container").classList.remove("Roshan"); //removes class "Roshan "
console.log(document.querySelector(".container").className); 

console.log(document.querySelector(".container").classList.toggle("red")); //as red was present, toggle removes it. If class red wasn't present, toggle would add it.

