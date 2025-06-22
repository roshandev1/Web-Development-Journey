console.log("HII");

let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "Green";

document.getElementById("redbox").style.backgroundColor="Red";

document.querySelector(".box").style.backgroundColor="blue"; //querySelector gives 1st element of given selector.

console.log(document.querySelectorAll(".box")); //querySelectorAll gives the collection of all elements i.e returns a node-list. We can't apply CSS directly to the list, for that we need to use "for-loop".

document.querySelectorAll(".box").forEach(e =>{
    //e.style.backgroundColor="green"
    // (This statement applies green Background to each box.)
})


let e= document.getElementsByTagName("div");
console.log(e);

console.log(e[2].matches("#redbox")); //returns true or false. Here true, as redbox id is present.

console.log(e[3].closest(".container")); //returns closest ancestor given in bracket. If not present, returns null.

console.log(document.querySelector(".container").contains(e[2])); //true if e[2] is present in ".container".
