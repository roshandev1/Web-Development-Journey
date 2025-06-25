console.log("script.js initializing...");

let boxes = document.getElementsByClassName("box"); 
// let boxes = document.querySelector(".container").children  (can also use this to get collection of boc elements.)

console.log(boxes);
//Above "boxes" is a HTML collection. Therefore we use 'Array.from' to convert it into array, so we can use 'for-loops' on that.

function getRandomColor(){

    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`    
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})