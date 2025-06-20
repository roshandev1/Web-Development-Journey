console.log("Hello World");

// CHILDREN OF AN ELEMENT:

console.log(document.body); //prints body

console.log(document.body.childNodes); //prints childnodes of body i.e NodeList(4) [text, div.container, text, script]

console.log(document.body.childNodes[1]); //prints 1st index element of above array i.e div.container

console.log(document.body.childNodes[1].childNodes); //prints all child of div.container

let cont = document.body.childNodes[1];
console.log(cont);

console.log(cont.firstElementChild)//prints 1st element child i.e div.box

console.log(cont.firstChild) //prints text as 1st child is space or newline

console.log(cont.lastElementChild)

console.log(cont.lastChild)

cont.lastElementChild.style.backgroundColor="Red" //changes BG Color of last box.

// SIBLINGS AND PARENT NODES:

console.log(document.body.parentElement);

console.log(document.body.parentNode);

console.log(document.body.nextSibling);

console.log(document.body.previousSibling);

console.log(document.previousElementsibling);

console.log(document.nextElementSibling);

console.log(document.body.nextElementSibling);

console.log(document.body.previousElementSibling);

console.log(document.body.firstElementChild.childNodes); //This gives array of all child nodes i.e text, comment, elements,etc.

console.log(document.body.firstElementChild.children); //This gives array of child nodes which are only elements.

//TABLE:

console.log(document.body.children); 

console.log(document.body.children[1]); //Here we are targeting the table, the table is in 1st index of children of body.
let tab=document.body.children[1];

console.log(tab.rows);

